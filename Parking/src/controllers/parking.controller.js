import { createParkingService } from "../services/parking.service.js";
import apiResponse from "../utils/apiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";

export const createParking = asyncHandler(async (req, res) => {
  await createParkingService(req.body);

  return res.status(201).json(new apiResponse(201,"created successfully",null))
});
