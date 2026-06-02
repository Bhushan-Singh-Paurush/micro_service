import { redis } from "../redis.js";
import { findUserByIdRepo } from "../repositories/user.repository.js";
import {
  createUserModuleRepo,
  getUserModulesRepo,
} from "../repositories/userModule.repository.js";

export const createUserModuleService = async (data) => {
  await createUserModuleRepo(data);

  const user = await findUserByIdRepo(data[0].userId);

  const exists = await redis.exists(`UserData:${user.email}`);

  if (exists) {
    await redis.del(`UserData:${user.email}`);
  }

  const modulesDetails = await getUserModuleService(user._id);

  await redis.hset(`UserData:${user.email}`, {
    name: user.name,
    email: user.email,
    _id: user._id,
    role: user.role,
    modulesDetails: JSON.stringify(modulesDetails),
  });

  return;
};

export const getUserModuleService = async (data) => {
  const userModules = await getUserModulesRepo(data);

  const modulesDetails = await userModules.map((module) => ({
    module_name: module.subModuleId.moduleId.name,
    subModule_name: module.subModuleId.name,
    read: module.read,
    write: module.write,
  }));

  return modulesDetails.length > 0 ? modulesDetails : [];
};
