import { NextRequest, NextResponse } from "next/server";

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

const validDays = ["day1", "day2", "day3"] as const;
const validWorkshops: Record<(typeof validDays)[number], string[]> = {
  day1: ["Workshop 1", "Workshop 2"],
  day2: ["Workshop 3", "Workshop 4"],
  day3: ["Workshop 5", "Workshop 6"],
};

export async function POST(req: NextRequest) {
  /**
   * Input:
   *  - Request body (json) should contain the following fields:
   *    - name: string (Name of the participant)
   *    - email: string (Email of the participant)
   *    - days: object (dictionary) with optional properties day1, day2, day3
   *      - Each property should be an array of strings representing the selected workshops for that day.
   *      - Valid workshop options for each day are:
   *        - day1: ["Workshop 1", "Workshop 2"]
   *        - day2: ["Workshop 3", "Workshop 4"]
   *        - day3: ["Workshop 5", "Workshop 6"]
   *    - questions: string (Optional; additional questions from the participant)
   *
   * Output:
   *  - On success: Response with status 200 and message "Workshop registration successful!"
   *  - On validation failure: Response with status 400 and descriptive error message indicating the error (e.g., missing fields, invalid day/workshop selection).
   *  - On server error: Response with status 500 and message "Internal server error"
   */
  try {
    const body: WorkshopRegistration = await req.json();

    if (!body.name || typeof body.name !== "string") {
      return NextResponse.json(
        { error: "Name is required and must be a string." },
        { status: 400 }
      );
    }

    if (
      !body.email ||
      typeof body.email !== "string" ||
      !isValidEmail(body.email)
    ) {
      return NextResponse.json(
        { error: "Email is required and must be a valid email address." },
        { status: 400 }
      );
    }

    if (!body.days || typeof body.days !== "object") {
      return NextResponse.json(
        { error: "Days field is required and must be an object." },
        { status: 400 }
      );
    }

    for (const day of validDays) {
      const workshops = body.days[day as keyof typeof body.days];

      if (workshops) {
        if (!Array.isArray(workshops)) {
          return NextResponse.json(
            { error: `${day} must be an array of workshops.` },
            { status: 400 }
          );
        }

        for (const workshop of workshops) {
          if (!validWorkshops[day].includes(workshop)) {
            return NextResponse.json(
              { error: `${workshop} is not a valid workshop for ${day}.` },
              { status: 400 }
            );
          }
        }
      }
    }

    return NextResponse.json(
      { message: "Workshop registration successful!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing registration:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
