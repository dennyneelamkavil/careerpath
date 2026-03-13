import "server-only";
import { Schema, model, models } from "mongoose";

const CareerSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },

    description: String,

    category: String,

    icon: String,

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true },
);

export const CareerModel = models.Career || model("Career", CareerSchema);
