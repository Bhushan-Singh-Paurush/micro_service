import { UserModule } from "../models/userModule.model.js";

export const createUserModuleRepo = async (data) => {
  await UserModule.insertMany(data);
};

export const getUserModulesRepo = async (userId) => {

  return await UserModule.find({ userId }, "-_id -userId").populate([
    {
      path: "subModuleId",
      select: "name moduleId",
      populate: {
        path: "moduleId",
        select: "name",
      },
    },
  ]);
};
