import apiError from "../utils/apiError.js";
import asyncHandler from "../utils/asyncHandler.js";
import { jwtVerify } from "jose"
import axios from "axios"
export const verifyJWT=asyncHandler(async(req,_,next)=>{
    
    const token=req.cookies.accessToken || req.header("Authentication")?.replace("Bearer ","")
    
    if(!token){
        throw new apiError(404,"No token Found");
    }

    try {
        const secret=new TextEncoder().encode(process.env.ACCESS_TOKEN_SECRET)
        
        const{payload}=await jwtVerify(token,secret)

        const{data:response} = await axios.get(`${process.env.AUTH_ULR}/api/v1/user/${payload._id}`)

        if(Object.keys(response).length==0){
            throw new apiError(401,"Invalid Access Token");
        }

        req.user=response.data;
        
        next();

    } catch (error) {
        console.log(error)
        throw new apiError(401,"Invalid Access Token");
        
    }
})

export const isUser=asyncHandler(async(req,_,next)=>{
    if(req.user.role!=="client")
        throw new apiError(403,"This is protected route for client only");

    next();
})

export const isAdmin=asyncHandler(async(req,_,next)=>{
    if(req.user.role!=="admin")
        throw new apiError(403,"This is protected route for admin only");

    next();
})