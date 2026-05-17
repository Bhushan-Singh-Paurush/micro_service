import db from "../db/dbConnection.js";

export const createBrokerRepo = async (data) => {
  await db.broker.create({
    data: data,
  });
};
