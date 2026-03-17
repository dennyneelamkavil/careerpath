import "server-only";
import { Schema, model, models } from "mongoose";

const OptionSchema = new Schema(
  {
    text: {
      type: String,
      required: true,
    },

    riasec: {
      R: { type: Number, default: 0 },
      I: { type: Number, default: 0 },
      A: { type: Number, default: 0 },
      S: { type: Number, default: 0 },
      E: { type: Number, default: 0 },
      C: { type: Number, default: 0 },
    },
  },
  { _id: false },
);

const QuestionSchema = new Schema(
  {
    assessmentId: {
      type: Schema.Types.ObjectId,
      ref: "Assessment",
      required: true,
    },

    question: {
      type: String,
      required: true,
    },

    options: [OptionSchema],

    order: Number,
  },
  { timestamps: true },
);

export const QuestionModel =
  models.Question || model("Question", QuestionSchema);
