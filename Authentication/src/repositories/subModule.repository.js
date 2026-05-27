import { SubModule } from "../models/subModule.model.js";

export const createSubModuleRepo = async (data) => {
  await SubModule.create(data);
};
