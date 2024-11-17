/*
  Warnings:

  - Made the column `location` on table `landfillArea` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "landfillArea" ALTER COLUMN "location" SET NOT NULL;
