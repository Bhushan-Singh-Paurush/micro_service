/*
  Warnings:

  - You are about to drop the column `service_name` on the `Security_Persons` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Notification" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Security_Persons" DROP COLUMN "service_name";
