import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/firebase";  // Make sure this path is correct
import { collection, addDoc, Timestamp } from "firebase/firestore";

interface WorkshopRegistration {
  name: string;
  email: string;
  days: {
    day1?: string[];
    day2?: string[];
    day3?: string[];
  };
  questions?: string;
}

export async function POST(req: NextRequest) {
  try {
    const body: WorkshopRegistration = await req.json();
    
    console.log("Received request:", body);

    if (!body.name || typeof body.name !== "string") {
      return NextResponse.json({ error: "Name is required and must be a string." }, { status: 400 });
    }

    if (!body.email || typeof body.email !== "string" || !isValidEmail(body.email)) {
      return NextResponse.json({ error: "Email is required and must be valid." }, { status: 400 });
    }

    const docRef = await addDoc(collection(db, "workshop_registrations"), {
      ...body,
      createdAt: Timestamp.now(),
    });

    return NextResponse.json({ message: "Workshop registration successful!", id: docRef.id }, { status: 200 });
  } catch (error) {
    console.error("Error processing request:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}