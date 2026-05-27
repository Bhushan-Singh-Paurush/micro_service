import { createSubModuleRepo } from "../repositories/subModule.repository.js";

export const createSubModuleService = async (data) => {
  await createSubModuleRepo(data);
};
