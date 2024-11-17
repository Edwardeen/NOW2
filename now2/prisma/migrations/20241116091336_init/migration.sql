/*
  Warnings:

  - You are about to drop the `Receiver` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ReceiverOnWaqf` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[bankNumber]` on the table `Waqf` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `totalTransferred` to the `History` table without a default value. This is not possible if the table is not empty.
  - Added the required column `totalScreened` to the `Transactions` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ReceiverOnWaqf" DROP CONSTRAINT "ReceiverOnWaqf_ReceiverID_fkey";

-- DropForeignKey
ALTER TABLE "ReceiverOnWaqf" DROP CONSTRAINT "ReceiverOnWaqf_WaqfID_fkey";

-- AlterTable
ALTER TABLE "History" ADD COLUMN     "totalTransferred" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Transactions" ADD COLUMN     "totalScreened" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Waqf" ADD COLUMN     "bankNumber" INTEGER,
ADD COLUMN     "totalRaised" INTEGER;

-- DropTable
DROP TABLE "Receiver";

-- DropTable
DROP TABLE "ReceiverOnWaqf";

-- CreateIndex
CREATE UNIQUE INDEX "Waqf_bankNumber_key" ON "Waqf"("bankNumber");
