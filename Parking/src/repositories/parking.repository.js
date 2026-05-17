import { Parking } from "../models/parking.js";

export const createParkingRepo = async (data) => {
  await Parking.create(data);
};
