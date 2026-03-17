import "server-only";
import { Schema, model, models } from "mongoose";

const ResultSchema = new Schema(
  {
    studentId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    assessmentId: {
      type: Schema.Types.ObjectId,
      ref: "Assessment",
      required: true,
    },

    attemptId: {
      type: Schema.Types.ObjectId,
      ref: "AssessmentAttempt",
    },

    scores: {
      R: Number,
      I: Number,
      A: Number,
      S: Number,
      E: Number,
      C: Number,
    },

    hollandCode: String,
  },
  { timestamps: true },
);

export const ResultModel = models.Result || model("Result", ResultSchema);
