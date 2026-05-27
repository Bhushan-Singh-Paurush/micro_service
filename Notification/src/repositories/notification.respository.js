import db from "../db/dbConnection.js"


export const createNotificationRepo=async(data)=>{
       await db.notification.create({
        data:data
       })
}