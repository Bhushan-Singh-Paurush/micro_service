import { createNotificationRepo } from "../repositories/notification.respository.js"


export const createNotificationService=async(data)=>{
    await createNotificationRepo(data)
}