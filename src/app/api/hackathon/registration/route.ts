import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/firebase"; 
import { collection, addDoc, Timestamp } from "firebase/firestore";

export async function POST(req: NextRequest) {
  /**
   * Hackathon Registration API Requirements:
   *
   * 1. **Request Method**: POST
   * 2. **Collection**: `hackathon_registrations` (Firestore)
   * 3. **Required Fields** (in request body):
   *    - `teamName`: string (Name of the team)
   *    - `leaderName`: string (Full name of the team leader)
   *    - `leaderEmail`: string (Email of the team leader, must be valid)
   *    - `leaderPhone`: string (Phone number of the team leader)
   *    - `members`: array of objects (List of team members)
   *      - Each member must have:
   *        - `name`: string (Full name of the member)
   *        - `email`: string (Valid email of the member)
   *        - `phone`: string (Phone number of the member)
   *
   * 4. **Validations**:
   *    - All fields must be provided and must be of the correct type.
   *    - `leaderEmail` and `members[].email` must be valid email addresses.
   *    - At least one member must be included in `members` array.
   *
   * 5. **Database Action**:
   *    - Store the registration details in Firestore under `hackathon_registrations` collection.
   *    - Add a `createdAt` field with a Firestore timestamp.
   *
   * 6. **Responses**:
   *    - **200 OK**: If registration is successful, return success message with Firestore document ID.
   *    - **400 Bad Request**: If any required field is missing or invalid, return an error message.
   *    - **500 Internal Server Error**: If Firestore write operation fails, return a server error message.
   */
}

// Helper function for email validation
function isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  