import { createSecurityPersonRepo, getAllSecurityPersonRepo } from "../repositories/securityPerson.respository.js"


export const createSecurityPersonService=async(data)=>{
       return await createSecurityPersonRepo(data)
}


export const getAllSecurityPersonService=async(data)=>{
       return await getAllSecurityPersonRepo(data._id)
}