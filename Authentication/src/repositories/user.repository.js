import { User } from "../models/user.model.js";

export const createUserRepo = async (data) => {
  await User.create(data);
};

export const findUserByEmailRepo = async (email) => {
  return await User.findOne({ email }).select("+password");
};

export const findUserByIdRepo = async (_id) => {
  return await User.findById(_id);
};