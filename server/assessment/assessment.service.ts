import "server-only";

import { connectDB } from "@/server/db";

import { AssessmentModel } from "@/server/models/assessment.model";
import { AssessmentAttemptModel } from "@/server/models/assessment-attempt.model";
import { AnswerModel } from "@/server/models/answer.model";
import { ResultModel } from "@/server/models/result.model";
import { QuestionModel } from "@/server/models/question.model";
import { CareerModel } from "@/server/models/career.model";

export async function listAssessments() {
  await connectDB();

  const assessments = await AssessmentModel.find({ isActive: true }).lean();

  return assessments.map((a) => ({
    _id: a._id,
    title: a.title,
    description: a.description,
    duration: a.duration,
    totalQuestions: a.totalQuestions,
  }));
}

export async function getAssessmentQuestions(assessmentId: string) {
  await connectDB();

  const questions = await QuestionModel.find({ assessmentId })
    .sort({ order: 1 })
    .lean();

  return questions.map((q) => ({
    _id: q._id,
    question: q.question,
    options: q.options.map((o: any, index: number) => ({
      index,
      text: o.text,
    })),
  }));
}

export async function startAssessment({
  studentId,
  assessmentId,
}: {
  studentId: string;
  assessmentId: string;
}) {
  await connectDB();

  const attempt = await AssessmentAttemptModel.create({
    studentId,
    assessmentId,
    startedAt: new Date(),
  });

  return attempt;
}

export async function saveAnswer({
  attemptId,
  questionId,
  selectedOptionIndex,
}: {
  attemptId: string;
  questionId: string;
  selectedOptionIndex: number;
}) {
  await connectDB();

  return AnswerModel.findOneAndUpdate(
    { attemptId, questionId },
    { selectedOptionIndex },
    { upsert: true, new: true },
  );
}

export async function submitAssessment({ attemptId }: { attemptId: string }) {
  await connectDB();

  await AssessmentAttemptModel.findByIdAndUpdate(attemptId, {
    status: "completed",
    completedAt: new Date(),
  });

  // TRIGGER SCORING ENGINE
  await calculateResult(attemptId);

  return { success: true };
}

export async function calculateResult(attemptId: string) {
  await connectDB();

  // 1️⃣ Get attempt
  const attempt = await AssessmentAttemptModel.findById(attemptId);

  if (!attempt) throw new Error("Attempt not found");

  // 2️⃣ Get answers
  const answers = await AnswerModel.find({ attemptId }).lean();

  // 3️⃣ Initialize RIASEC scores
  const scores = {
    R: 0,
    I: 0,
    A: 0,
    S: 0,
    E: 0,
    C: 0,
  };

  // 4️⃣ Loop through answers
  for (const answer of answers) {
    const question = await QuestionModel.findById(answer.questionId).lean();

    if (!question) continue;

    const selectedOption = question.options[answer.selectedOptionIndex];

    if (!selectedOption) continue;

    const riasec = selectedOption.riasec;

    scores.R += riasec.R || 0;
    scores.I += riasec.I || 0;
    scores.A += riasec.A || 0;
    scores.S += riasec.S || 0;
    scores.E += riasec.E || 0;
    scores.C += riasec.C || 0;
  }

  // 5️⃣ Generate Holland Code (Top 3)
  const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);

  const hollandCode = sorted
    .slice(0, 3)
    .map((x) => x[0])
    .join("");

  // 6️⃣ Get matching careers
  const careers = await CareerModel.find({
    riasecCode: { $regex: hollandCode },
  }).lean();

  // 7️⃣ Save result
  const result = await ResultModel.create({
    studentId: attempt.studentId,
    assessmentId: attempt.assessmentId,
    attemptId,
    scores,
    hollandCode,
    careers: careers.map((c) => c._id),
  });

  return result;
}

export async function getResult(attemptId: string) {
  await connectDB();

  return ResultModel.findOne({ attemptId }).populate("careers");
}
