import mongoose from "mongoose";

const parkingSchema = new mongoose.Schema({
  timestamp: {
    type: Date,
    required: true,
  },
  numberPlate: {
    type: String,
    required: true,
  },
});

export const Parking = mongoose.model("Parking", parkingSchema);
