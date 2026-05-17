import { createBrokerRepo } from "../repositories/broker.repository.js";

export const createBrokerService = async (data) => {
  await createBrokerRepo(data);
};
