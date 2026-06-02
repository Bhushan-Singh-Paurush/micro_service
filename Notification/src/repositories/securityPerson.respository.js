import db from "../db/dbConnection.js"


export const createSecurityPersonRepo=async(data)=>{
      return await db.securityPersons.create({
        data:data
      })
}

export const getAllSecurityPersonRepo=async(userId)=>{
      return await db.securityPersons.findMany({
        where:{
          userId:userId
        },
        select:{
          name:true,
          email:true,
          phone:true,
          status:true
        }
      })
}