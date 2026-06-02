import { createUserModuleService, getUserModuleService } from "../services/userModule.service.js";
import apiResponse from "../utils/apiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";

export const createUserModule = asyncHandler(async (req, res) => {
  await createUserModuleService(req.body);

  return res
    .status(201)
    .json(new apiResponse(201, "user modules created successfully", null));
});

export const getUserModules = asyncHandler(async(req,res)=>{
  const UserData = await getUserModuleService(req.params.id)
 
  return res
    .status(201)
    .json(new apiResponse(201, "user modules", UserData));

})
