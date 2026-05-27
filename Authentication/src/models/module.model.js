import mongoose from "mongoose";

const moduleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
  },
},{timestamps:true});

export const Module = mongoose.model("Module", moduleSchema);
