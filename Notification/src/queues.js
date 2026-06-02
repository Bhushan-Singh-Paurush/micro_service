import {Queue} from "bullmq"


const connection={
    host:process.env.REDIS_HOST,
    port:process.env.REDIS_PORT
}


const emailQueue=new Queue("email",{connection})

export {emailQueue,connection}