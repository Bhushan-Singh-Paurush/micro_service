import { createModuleRepo } from "../repositories/module.repository.js";

export const createModuleService = async (data) => {
  await createModuleRepo(data);
};
