import {
  createUserRepo,
  findUserByEmailRepo,
  findUserByIdRepo,
  getAllUserRepo,
} from "../repositories/user.repository.js";

export const createUserService = async (data) => {
  return await createUserRepo(data);
};

export const getUserByIdService = async (data) => {
  const user = await findUserByIdRepo(data.id);

  user.refreshToken = undefined;

  return user;
};

export const getAllUserService=async()=>{
  return await getAllUserRepo()
}