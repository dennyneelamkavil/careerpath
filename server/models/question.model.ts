import "server-only";
import { Schema, model, models } from "mongoose";

const OptionSchema = new Schema(
  {
    text: {
      type: String,
      required: true,
    },

    weights: [
      {
        careerId: {
          type: Schema.Types.ObjectId,
          ref: "Career",
        },

        score: Number,
      },
    ],
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
