import { NextRequest, NextResponse } from 'next/server';

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

}