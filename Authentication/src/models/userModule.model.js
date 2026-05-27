import mongoose from "mongoose";

const userModuleSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: [true, "User id is required"],
  },
  subModuleId: {
    type: mongoose.Types.ObjectId,
    ref: "SubModule",
    required: [true, "Module id is required"],
    unique:true
  },
  read: {
    type: Boolean,
    default: false,
  },
  write: {
    type: Boolean,
    default: false,
  },
},{timestamps:true});

export const UserModule = mongoose.model("UserModule", userModuleSchema);
