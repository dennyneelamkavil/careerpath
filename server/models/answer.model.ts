import "server-only";
import { Schema, model, models } from "mongoose";

const AnswerSchema = new Schema(
  {
    attemptId: {
      type: Schema.Types.ObjectId,
      ref: "AssessmentAttempt",
      required: true,
    },

    questionId: {
      type: Schema.Types.ObjectId,
      ref: "Question",
      required: true,
    },

    selectedOptionIndex: Number,
  },
  { timestamps: true },
);

export const AnswerModel = models.Answer || model("Answer", AnswerSchema);
