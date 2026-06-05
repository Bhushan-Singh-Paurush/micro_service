import { createSubModuleService, getSubModuleByModuleIdService } from "../services/subModule.service.js";
import apiResponse from "../utils/apiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";

export const createSubModule = asyncHandler(async (req, res) => {
  await createSubModuleService(req.body);

  return res
    .status(201)
    .json(new apiResponse(201, "Sub Module created successfully", null));
});

export const getSubModuleByModuleId=asyncHandler(async(req,res)=>{
  const subModules = await getSubModuleByModuleIdService(req.body)
 
  return res
    .status(201)
    .json(new apiResponse(201, "Sub Module", subModules));

})