-- CreateEnum
CREATE TYPE "NotificationStatus" AS ENUM ('READ', 'SEND', 'FAILED', 'PENDING', 'PROCESSING');

-- CreateTable
CREATE TABLE "Notification" (
    "id" TEXT NOT NULL,
    "service_name" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "data" JSONB NOT NULL,
    "status" "NotificationStatus" NOT NULL DEFAULT 'PENDING',

    CONSTRAINT "Notification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Security_Persons" (
    "id" TEXT NOT NULL,
    "service_name" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "email" TEXT,
    "phone" TEXT,
    "name" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Security_Persons_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Notification_userId_idx" ON "Notification"("userId");

-- CreateIndex
CREATE INDEX "Notification_service_name_idx" ON "Notification"("service_name");
