import "server-only";
import { Schema, model, models } from "mongoose";

const AssessmentSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },

    description: String,

    duration: {
      type: Number,
      default: 20,
    },

    totalQuestions: Number,

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true },
);

export const AssessmentModel =
  models.Assessment || model("Assessment", AssessmentSchema);
