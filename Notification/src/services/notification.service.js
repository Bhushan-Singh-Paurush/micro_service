import {
  createNotificationRepo,
  getNotificationByIdRepo,
  getNotificationRepo,
} from "../repositories/notification.respository.js";
import axios from "axios";
import { getObjectURL } from "../utils/awss3.js";
import { featuresThatHaveNotification } from "../constant.js";
import { emailQueue } from "../queues.js";

export const createNotificationService = async (data) => {
  await createNotificationRepo(data);
};

export const getNotificationService = async (_id,page,limit) => {

  const { data: response } = await axios(
    `${process.env.AUTH_ULR}/api/v1/userModule/${_id}`
  );

  if (
    !response.data.some(
      (ele) =>
        ele.module_name === "settings" && ele.subModule_name === "notification"
    )
  )
    throw new Error("User not subscribed for this module");

  const modules = [];

  response.data.forEach((element) => {
    if (
      featuresThatHaveNotification.some(
        (item) =>
          item.module_name === element.module_name &&
          item.subModule_name === element.subModule_name
      )
    ) {
      modules.push(element.module_name);
    }
  });


  const notifications = await getNotificationRepo(modules,_id,page,limit);



  await Promise.all(
    notifications.map(async (ele) => {
      if (ele?.data?.crop) {
        ele.data.crop = await getObjectURL(ele.data.crop);
      }
    })
  );

  return notifications;
};


export const getNotificationByIdService=async(data)=>{
       const notification =  await getNotificationByIdRepo(data.id)


       if (notification?.data?.crop)
       notification.data.crop=await getObjectURL( notification.data.crop);

       return notification;

}

export const sendNotificationService=async(data)=>{
       const emailArray=data.recipientEmails.replaceAll(" ","").split(",");

       if(emailArray?.length>0)
       {
              for(const email of emailArray){
               await emailQueue.add("send-email",{
                subject:data.emailSubject,
                body:data.emailBody,
                email:email
               },
               {
                  attempts: 3,
                  backoff: {
                    type: "exponential",
                    delay: 5000,
                  },
                }
              )
            }
        
       }

       return ;
}