import { NextRequest, NextResponse } from 'next/server';

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

const validDays = ['day1', 'day2', 'day3'];
const validWorkshops = {
  day1: ['Workshop 1', 'Workshop 2'],
  day2: ['Workshop 3', 'Workshop 4'],
  day3: ['Workshop 5', 'Workshop 6']
};

/**
 * Input:
 *  - Request body (json) should contain the following fields:
 *    - name: string (Name of the participant)
 *    - email: string (Email of the participant)
 *    - days: object with optional properties day1, day2, day3
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

}