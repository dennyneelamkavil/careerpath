import { NextResponse } from "next/server";
import { startAssessment } from "@/server/assessment/assessment.service";
import { handleApiError } from "@/server/errors/handleApiError";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    return NextResponse.json(await startAssessment(body));
  } catch (err) {
    return handleApiError(err);
  }
}
