import { NextRequest, NextResponse } from "next/server";
import { getAssessmentQuestions } from "@/server/assessment/assessment.service";
import { handleApiError } from "@/server/errors/handleApiError";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;
    return NextResponse.json(await getAssessmentQuestions(id));
  } catch (err) {
    return handleApiError(err);
  }
}
