import { db } from "../db/dbConnection.js";
import { apiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";



export const createUser=asyncHandler(async(req,res)=>{
    const users = req.body.names.map(name => ({
  name
}));
    await db.user.createMany({
        data:users
    })

    return res.status(201).json(new apiResponse(201,"Users created successfully"))
})

export const getUser=asyncHandler(async(req,res)=>{
    
    const search = req.query.search;

    console.log(search)
    
    const users = await db.user.findMany({
        where:{
            name:{
                  contains:search,
                  mode:"insensitive" 
            }
        }
    })

    return res.status(201).json(new apiResponse(201,"Users",users))
})