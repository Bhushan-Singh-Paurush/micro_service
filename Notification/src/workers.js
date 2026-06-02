import { Worker } from "bullmq";
import { connection } from "./queues.js";
import { mailSender } from "./utils/mailSender.js";

export const worker = new Worker(
  "email",
  async (job) => {
    await mailSender(job.data.subject, job.data.email, job.data.body);
  },
  { connection }
);

worker.on("completed", (job) => {
  console.log("Email send Successfully", job.id, job.name, job.data.email);
});


worker.on("failed",(job,error)=>{
    console.log("Failed to send email",job.id,job.name,error)
})