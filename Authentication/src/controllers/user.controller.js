import { createUserService, getUserByIdService} from "../services/user.service.js";
import apiResponse from "../utils/apiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";

export const createUser = asyncHandler(async (req, res) => {
  await createUserService(req.body);

  return res
    .status(201)
    .json(new apiResponse(201, "created successfully", null));
});


export const getUserById=asyncHandler(async(req,res)=>{
  const user = await  getUserByIdService(req.params)
  
   return res
    .status(200)
    .json(new apiResponse(201, "User details", user));

})