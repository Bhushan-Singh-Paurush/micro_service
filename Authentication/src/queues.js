import { Queue } from "bullmq";
import dotenv from "dotenv"
dotenv.config({path:"./.env"})

const connection = {
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
};

const emailQueue = new Queue("emails", { connection });

export { connection, emailQueue };
