/*
  Warnings:

  - You are about to drop the `ScreenerOnLandfills` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TransformerOnLandfills` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ScreenerOnLandfills" DROP CONSTRAINT "ScreenerOnLandfills_LandfillID_fkey";

-- DropForeignKey
ALTER TABLE "ScreenerOnLandfills" DROP CONSTRAINT "ScreenerOnLandfills_ScreenerID_fkey";

-- DropForeignKey
ALTER TABLE "TransformerOnLandfills" DROP CONSTRAINT "TransformerOnLandfills_LandfillID_fkey";

-- DropForeignKey
ALTER TABLE "TransformerOnLandfills" DROP CONSTRAINT "TransformerOnLandfills_TransformerID_fkey";

-- AlterTable
ALTER TABLE "Landfills" ADD COLUMN     "ScreenerID" INTEGER,
ADD COLUMN     "TransformerID" INTEGER;

-- DropTable
DROP TABLE "ScreenerOnLandfills";

-- DropTable
DROP TABLE "TransformerOnLandfills";

-- AddForeignKey
ALTER TABLE "Landfills" ADD CONSTRAINT "Landfills_TransformerID_fkey" FOREIGN KEY ("TransformerID") REFERENCES "Transformer"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Landfills" ADD CONSTRAINT "Landfills_ScreenerID_fkey" FOREIGN KEY ("ScreenerID") REFERENCES "Screener"("id") ON DELETE SET NULL ON UPDATE CASCADE;
