import { NextRequest, NextResponse } from "next/server";
import { getResult } from "@/server/assessment/assessment.service";
import { handleApiError } from "@/server/errors/handleApiError";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ attemptId: string }> },
) {
  try {
    const { attemptId } = await params;
    return NextResponse.json(await getResult(attemptId));
  } catch (err) {
    return handleApiError(err);
  }
}
