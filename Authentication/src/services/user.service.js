import { createUserRepo } from "../repositories/user.repository.js";

export const createUserService = async (data) => {
  await createUserRepo(data);
};
