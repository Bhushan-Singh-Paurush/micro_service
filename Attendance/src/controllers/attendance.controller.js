import { createAttendanceService } from "../services/attendance.service.js";
import { apiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

export const createAttendance = asyncHandler(async (req, res) => {
  const data = req.body;
  await createAttendanceService(data);

  return res.status(201).json(new apiResponse(201, null));
});
