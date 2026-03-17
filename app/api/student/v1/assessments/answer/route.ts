import { NextResponse } from "next/server";
import { saveAnswer } from "@/server/assessment/assessment.service";
import { handleApiError } from "@/server/errors/handleApiError";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    return NextResponse.json(await saveAnswer(body));
  } catch (err) {
    return handleApiError(err);
  }
}
