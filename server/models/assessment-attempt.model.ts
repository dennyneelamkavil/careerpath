import "server-only";
import { Schema, model, models } from "mongoose";

const AssessmentAttemptSchema = new Schema(
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

    status: {
      type: String,
      enum: ["started", "completed"],
      default: "started",
    },

    startedAt: Date,
    completedAt: Date,
  },
  { timestamps: true },
);

export const AssessmentAttemptModel =
  models.AssessmentAttempt ||
  model("AssessmentAttempt", AssessmentAttemptSchema);
