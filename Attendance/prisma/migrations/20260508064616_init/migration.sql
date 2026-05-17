-- CreateEnum
CREATE TYPE "Role" AS ENUM ('Entry', 'Exit');

-- CreateEnum
CREATE TYPE "Status" AS ENUM ('Present', 'Absent', 'Late');

-- CreateTable
CREATE TABLE "AttendaceLogs" (
    "id" TEXT NOT NULL,
    "crop" TEXT NOT NULL,
    "timeStamp" TIMESTAMP(3) NOT NULL,
    "role" "Role" NOT NULL,
    "camera_id" TEXT NOT NULL,
    "status" "Status" NOT NULL,

    CONSTRAINT "AttendaceLogs_pkey" PRIMARY KEY ("id")
);
