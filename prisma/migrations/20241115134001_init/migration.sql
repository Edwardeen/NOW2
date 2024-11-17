/*
  Warnings:

  - You are about to drop the column `name` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[username]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "User_email_key";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "name",
ADD COLUMN     "address" TEXT,
ADD COLUMN     "city" TEXT,
ADD COLUMN     "country" TEXT,
ADD COLUMN     "dateofbirth" TIMESTAMP(3),
ADD COLUMN     "familyName" TEXT,
ADD COLUMN     "frontName" TEXT,
ADD COLUMN     "icNumber" INTEGER,
ADD COLUMN     "phoneNumber" INTEGER,
ADD COLUMN     "province" TEXT,
ADD COLUMN     "username" TEXT,
ADD COLUMN     "zipCode" INTEGER;

-- CreateTable
CREATE TABLE "Entity" (
    "id" SERIAL NOT NULL,
    "companyUsername" TEXT,
    "picFrontName" TEXT,
    "picFamilyName" TEXT,
    "picPhoneNumber" INTEGER,
    "dateofbirth" TIMESTAMP(3) NOT NULL,
    "companyName" TEXT,
    "companyAddress" TEXT,
    "companyPhoneNumber" INTEGER,
    "companyZipCode" INTEGER,
    "companyEmail" TEXT,
    "companyRegistrationNumber" TEXT,

    CONSTRAINT "Entity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Landfills" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "Landfills_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Entity_companyUsername_key" ON "Entity"("companyUsername");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");
