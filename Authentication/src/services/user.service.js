import { createUserRepo, findUserByEmailRepo, findUserByIdRepo } from "../repositories/user.repository.js";

export const createUserService = async (data) => {
  await createUserRepo(data);
};

export const getUserByIdService=async(data)=>{
  const user = await findUserByIdRepo(data.id)

  user.refreshToken=undefined

  return user;
}