/*
  Warnings:

  - Added the required column `date` to the `AppointmentDate` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `AppointmentDate` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "AppointmentDate" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "date" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;
