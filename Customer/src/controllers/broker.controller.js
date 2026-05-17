import { createBrokerService } from "../services/broker.service.js";
import apiResponse from "../utils/apiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";

export const createBrocker = asyncHandler(async (req, res) => {
  await createBrokerService(req.body);

  return res
    .status(201)
    .json(new apiResponse(201, "data created successfully", null));
});
