import { User } from "../models/user.model.js";

export const createUserRepo = async (data) => {
  await User.create(data);
};
