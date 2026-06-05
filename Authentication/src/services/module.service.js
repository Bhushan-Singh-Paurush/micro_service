import { createModuleRepo, getModulRepo } from "../repositories/module.repository.js";

export const createModuleService = async (data) => {
  await createModuleRepo(data);
};


export const getModuleService=async(data)=>{
  return await getModulRepo(data.name) 
}