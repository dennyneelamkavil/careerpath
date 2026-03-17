import { NextResponse } from "next/server";
import { submitAssessment } from "@/server/assessment/assessment.service";
import { handleApiError } from "@/server/errors/handleApiError";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    return NextResponse.json(await submitAssessment(body));
  } catch (err) {
    return handleApiError(err);
  }
}
