import { createParkingRepo } from "../repositories/parking.repository.js";

export const createParkingService = async (data) => {
  await createParkingRepo(data);
};
