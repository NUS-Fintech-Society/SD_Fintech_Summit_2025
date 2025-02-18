import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/firebase"; 
import { collection, addDoc, Timestamp } from "firebase/firestore";

interface TeamMember {
  name: string;
  email: string;
  phone: string;
}

interface RegistrationData {
  teamName: string;
  leaderName: string;
  leaderEmail: string;
  leaderPhone: string;
  members: TeamMember[];
}

const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
  if (!email || typeof email !== 'string') {
    return false;
  }
  
  email = email.trim().toLowerCase();
  return emailRegex.test(email);
};

export async function POST(req: NextRequest) {
  try {
    // Parse request body
    const data: RegistrationData = await req.json();

    // Validate required fields
    if (!data.teamName || !data.leaderName || !data.leaderEmail || 
        !data.leaderPhone || !Array.isArray(data.members)) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validate leader email
    if (!isValidEmail(data.leaderEmail)) {
      return NextResponse.json(
        { error: "Invalid leader email address" },
        { status: 400 }
      );
    }

    // Validate team members
    if (data.members.length === 0) {
      return NextResponse.json(
        { error: "At least one team member is required" },
        { status: 400 }
      );
    }

    // Validate each member's data
    for (const member of data.members) {
      if (!member.name || !member.email || !member.phone) {
        return NextResponse.json(
          { error: "Missing required member information" },
          { status: 400 }
        );
      }

      if (!isValidEmail(member.email)) {
        return NextResponse.json(
          { error: "Invalid member email address" },
          { status: 400 }
        );
      }
    }

    // Prepare registration data with timestamp
    const registrationData = {
      ...data,
      createdAt: Timestamp.now()
    };

    // Add to Firestore
    const docRef = await addDoc(
      collection(db, "hackathon_registrations"),
      registrationData
    );

    // Return success response
    return NextResponse.json({
      message: "Registration successful",
      registrationId: docRef.id
    }, { status: 200 });

  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}