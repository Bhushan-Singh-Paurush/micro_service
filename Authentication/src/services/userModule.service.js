import { redis } from "../redis.js";
import { findUserByIdRepo } from "../repositories/auth.repositories.js";
import { createUserModuleRepo, getUserModulesRepo } from "../repositories/userModule.repository.js";

export const createUserModuleService = async (data) => {
  await createUserModuleRepo(data);

  const user = await findUserByIdRepo(data[0].userId)

  

  const exists=await redis.exists(`UserData:${user.email}`)

  if(exists){
    await redis.del(`UserData:${user.email}`)
  }

    const userModules = await getUserModulesRepo(user._id);
  
      const modulesDetails = await userModules.map((module) => ({
        module_name: module.subModuleId.moduleId.name,
        subModule_name: module.subModuleId.name,
        read: module.read,
        write: module.write,
      }));
  
      const UserData = {
        name: user.name,
        email: user.email,
        _id: user._id,
        role: user.role,
        modulesDetails,
      };
  
      await redis.hset(`UserData:${user.email}`, {
        name: UserData.name,
        email: UserData.email,
        _id: UserData._id,
        role: UserData.role,
        modulesDetails: JSON.stringify(UserData.modulesDetails),
      });
    
      return ;

};
