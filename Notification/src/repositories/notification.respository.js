import db from "../db/dbConnection.js";

export const createNotificationRepo = async (data) => {
  await db.notification.create({
    data: data,
  });
};

export const getNotificationRepo = async (moduleArray, userId) => {
  const start = new Date();
  start.setHours(0, 0, 0, 0);

  const end = new Date();
  end.setHours(23, 59, 59, 999);

  return await db.notification.findMany({
    where: {
      userId: userId,
      service_name: {
        in: moduleArray,
      },
      created_at: {
        gte: start,
        lte: end,
      },
    },
    select: {
      service_name: true,
      data: true,
      userId: true,
      status: true,
      id:true
    },
  });
};


export const getNotificationByIdRepo=async(id)=>{
      const notification = await db.notification.findFirst({
        where:{
          id:id
        },
        select:{
           service_name: true,
          data: true,
          status: true,
          id:true
        }
      })
      
      return notification;
}