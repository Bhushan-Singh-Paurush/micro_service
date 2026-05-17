import { createAttendanceRepo } from "../repositories/attendance.repository.js";

export async function createAttendanceService(data) {
  await createAttendanceRepo(data);
}
