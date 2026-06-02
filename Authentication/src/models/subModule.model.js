import mongoose from "mongoose";

const subModuleSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      lowercase: true,
      required: true,
    },
    moduleId: {
      type: mongoose.Types.ObjectId,
      ref: "Module",
      required: true,
    },
  },
  { timestamps: true }
);

export const SubModule = mongoose.model("SubModule", subModuleSchema);
