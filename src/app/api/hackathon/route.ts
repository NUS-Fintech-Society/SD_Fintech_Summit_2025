import { NextRequest, NextResponse } from "next/server";

interface HackathonSubmission {
  teamName: string;
  submissionTime: string;
  repoLink: string;
}

export async function POST(req: NextRequest) {
  /**
   * Input:
   *  - Request body (json) should contain the following fields:
   *    - teamName: string (Name of the team)
   *    - submissionTime: string (ISO timestamp of submission time)
   *    - repoLink: string (Link to repository or submission)
   *
   * Output:
   *  - On success: Response with status 200 and message "Hackathon submission received!"
   *  - On validation failure: Response with status 400 and descriptive error message
   *  - On server error: Response with status 500 and message "Internal server error"
   */
  try {
    const { teamName, submissionTime, repoLink }: HackathonSubmission =
      await req.json();

    if (!teamName || typeof teamName !== "string") {
      return NextResponse.json(
        { error: "Invalid or missing 'teamName'" },
        { status: 400 }
      );
    }
    if (!submissionTime || isNaN(new Date(submissionTime).getTime())) {
      return NextResponse.json(
        { error: "Invalid or missing 'submissionTime'" },
        { status: 400 }
      );
    }
    if (!repoLink || typeof repoLink !== "string") {
      return NextResponse.json(
        { error: "Invalid or missing 'repoLink'" },
        { status: 400 }
      );
    }

    console.log("Hackathon submission received:", {
      teamName,
      submissionTime,
      repoLink,
    });

    return NextResponse.json(
      { message: "Hackathon submission received!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing submission:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
