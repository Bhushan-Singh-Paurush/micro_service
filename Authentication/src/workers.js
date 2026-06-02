import { Worker } from "bullmq";
import { sendMail } from "./utils/mailSender.js";
import { connection } from "./queues.js";


export const emailWorker = new Worker(
  "emails",
  async (job) => {
    await sendMail(job.data.subject, job.data.email, job.data.body);
  },
  { connection }
);

emailWorker.on("completed", (job) => {
  console.log("Email send successfully", job.id, job.name, job.data.email);
});

emailWorker.on("failed", (job, error) => {
  console.log("failed", job.id, job.name, error);
});
