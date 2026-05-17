import { db } from "../db/dbConnection.js";

export async function createAttendanceRepo(data) {
  await db.attendaceLogs.create({
    data: data,
  });
}
