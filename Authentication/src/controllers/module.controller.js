import { createModuleService } from "../services/module.service.js";
import apiResponse from "../utils/apiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";

export const createModule = asyncHandler(async (req, res) => {
  await createModuleService(req.body);

  return res
    .status(201)
    .json(new apiResponse(201, "Module created successfully", null));
});
