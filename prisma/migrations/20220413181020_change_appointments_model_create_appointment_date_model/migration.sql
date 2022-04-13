/*
  Warnings:

  - You are about to drop the column `appointmentDate` on the `Appointments` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Appointments" DROP COLUMN "appointmentDate";

-- CreateTable
CREATE TABLE "AppointmentDate" (
    "id" TEXT NOT NULL,
    "appointmentsId" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "month" INTEGER NOT NULL,
    "day" INTEGER NOT NULL,
    "hour" INTEGER NOT NULL,

    CONSTRAINT "AppointmentDate_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "AppointmentDate_appointmentsId_key" ON "AppointmentDate"("appointmentsId");

-- AddForeignKey
ALTER TABLE "AppointmentDate" ADD CONSTRAINT "AppointmentDate_appointmentsId_fkey" FOREIGN KEY ("appointmentsId") REFERENCES "Appointments"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
