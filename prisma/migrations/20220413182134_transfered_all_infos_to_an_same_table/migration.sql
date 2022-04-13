/*
  Warnings:

  - You are about to drop the `AppointmentDate` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `appointmentDate` to the `Appointments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `day` to the `Appointments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hour` to the `Appointments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `month` to the `Appointments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `year` to the `Appointments` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "AppointmentDate" DROP CONSTRAINT "AppointmentDate_appointmentsId_fkey";

-- AlterTable
ALTER TABLE "Appointments" ADD COLUMN     "appointmentDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "day" INTEGER NOT NULL,
ADD COLUMN     "hour" INTEGER NOT NULL,
ADD COLUMN     "month" INTEGER NOT NULL,
ADD COLUMN     "year" INTEGER NOT NULL;

-- DropTable
DROP TABLE "AppointmentDate";
