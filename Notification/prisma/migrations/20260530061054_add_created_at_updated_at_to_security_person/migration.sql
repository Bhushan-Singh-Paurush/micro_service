/*
  Warnings:

  - You are about to drop the `Security_Persons` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Security_Persons";

-- CreateTable
CREATE TABLE "SecurityPersons" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "email" TEXT,
    "phone" TEXT,
    "name" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SecurityPersons_pkey" PRIMARY KEY ("id")
);
