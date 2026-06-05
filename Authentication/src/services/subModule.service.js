import { createSubModuleRepo, getSubModuleByModuleIdRepo } from "../repositories/subModule.repository.js";

export const createSubModuleService = async (data) => {
  await createSubModuleRepo(data);
};



export const getSubModuleByModuleIdService=async(data)=>{
  return await getSubModuleByModuleIdRepo(data.id)
}