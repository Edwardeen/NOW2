/*
  Warnings:

  - Made the column `companyUsername` on table `Entity` required. This step will fail if there are existing NULL values in that column.
  - Made the column `password` on table `Entity` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Entity" ALTER COLUMN "companyUsername" SET NOT NULL,
ALTER COLUMN "password" SET NOT NULL;
