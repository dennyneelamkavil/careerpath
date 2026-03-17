import { NextResponse } from "next/server";
import { listAssessments } from "@/server/assessment/assessment.service";
import { handleApiError } from "@/server/errors/handleApiError";

export async function GET() {
  try {
    return NextResponse.json(await listAssessments());
  } catch (err) {
    return handleApiError(err);
  }
}
