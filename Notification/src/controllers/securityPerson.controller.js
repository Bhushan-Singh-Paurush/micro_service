import { createSecurityPersonService, getAllSecurityPersonService } from "../services/securityPerson.service.js";
import apiResponse from "../utils/apiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";


export const createSecurityPerson=asyncHandler(async(req,res)=>{

       req.body.userId=req.user._id
       
       const securityPerson  = await createSecurityPersonService(req.body)

       return res.status(201).json(new apiResponse(201,"Security Person created",securityPerson))
})

export const getAllSecurityPerson=asyncHandler(async(req,res)=>{
       const persons=await getAllSecurityPersonService(req.user)

        return res.status(201).json(new apiResponse(201,"All Security Person",persons))
})