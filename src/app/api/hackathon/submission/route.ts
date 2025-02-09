import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/firebase";  // Ensure this path is correct
import { collection, addDoc, Timestamp } from "firebase/firestore";

interface HackathonSubmission {
  teamName: string;
  submissionTime: string;
  repoLink: string;
}

export async function POST(req: NextRequest) {
  /**
   * Input:
   *  - Request body (json) should contain:
   *    - teamName: string (Team's name)
   *    - submissionTime: string (ISO timestamp)
   *    - repoLink: string (GitHub repo or submission link)
   *
   * Output:
   *  - Success: { status: 200, message: "Submission received!" }
   *  - Validation failure: { status: 400, error: "Missing fields" }
   *  - Server error: { status: 500, error: "Internal server error" }
   */
  try {
    const body: HackathonSubmission = await req.json();
    console.log("Received Hackathon Submission:", body);

    // Validate Input
    if (!body.teamName || typeof body.teamName !== "string") {
      return NextResponse.json({ error: "Invalid or missing 'teamName'" }, { status: 400 });
    }
    if (!body.submissionTime || isNaN(new Date(body.submissionTime).getTime())) {
      return NextResponse.json({ error: "Invalid or missing 'submissionTime'" }, { status: 400 });
    }
    if (!body.repoLink || typeof body.repoLink !== "string" || !isValidUrl(body.repoLink)) {
      return NextResponse.json({ error: "Invalid or missing 'repoLink'" }, { status: 400 });
    }

    // Save to Firestore
    const docRef = await addDoc(collection(db, "hackathon_submissions"), {
      teamName: body.teamName,
      submissionTime: body.submissionTime,
      repoLink: body.repoLink,
      createdAt: Timestamp.now(),
    });

    console.log("Submission stored in Firestore with ID:", docRef.id);

    return NextResponse.json({ message: "Hackathon submission received!", id: docRef.id }, { status: 200 });
  } catch (error) {
    console.error("Error processing hackathon submission:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

// Helper function to validate URLs
function isValidUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}