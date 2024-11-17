/*
  Warnings:

  - A unique constraint covering the columns `[landfillName]` on the table `Landfills` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `landfillAreaName` to the `Landfills` table without a default value. This is not possible if the table is not empty.
  - Added the required column `landfillName` to the `Landfills` table without a default value. This is not possible if the table is not empty.
  - Added the required column `landfillPhoneNumber` to the `Landfills` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Entity" ADD COLUMN     "password" TEXT;

-- AlterTable
ALTER TABLE "Landfills" ADD COLUMN     "imageUri" TEXT,
ADD COLUMN     "landfillAddress" TEXT,
ADD COLUMN     "landfillAreaName" TEXT NOT NULL,
ADD COLUMN     "landfillName" TEXT NOT NULL,
ADD COLUMN     "landfillPhoneNumber" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "password" TEXT;

-- CreateTable
CREATE TABLE "Admin" (
    "id" SERIAL NOT NULL,
    "username" TEXT,
    "password" TEXT,
    "name" TEXT NOT NULL,

    CONSTRAINT "Admin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Receiver" (
    "id" SERIAL NOT NULL,
    "username" TEXT,
    "password" TEXT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phoneNumber" INTEGER NOT NULL,
    "bankNumber" INTEGER NOT NULL,

    CONSTRAINT "Receiver_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Screener" (
    "id" SERIAL NOT NULL,
    "username" TEXT,
    "password" TEXT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phoneNumber" INTEGER NOT NULL,

    CONSTRAINT "Screener_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Transformer" (
    "id" SERIAL NOT NULL,
    "username" TEXT,
    "password" TEXT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phoneNumber" INTEGER NOT NULL,

    CONSTRAINT "Transformer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "landfillArea" (
    "id" SERIAL NOT NULL,
    "location" TEXT,

    CONSTRAINT "landfillArea_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TransformerOnLandfills" (
    "TransformerID" INTEGER NOT NULL,
    "LandfillID" INTEGER NOT NULL,

    CONSTRAINT "TransformerOnLandfills_pkey" PRIMARY KEY ("LandfillID","TransformerID")
);

-- CreateTable
CREATE TABLE "ScreenerOnLandfills" (
    "ScreenerID" INTEGER NOT NULL,
    "LandfillID" INTEGER NOT NULL,

    CONSTRAINT "ScreenerOnLandfills_pkey" PRIMARY KEY ("LandfillID","ScreenerID")
);

-- CreateTable
CREATE TABLE "Waqf" (
    "id" SERIAL NOT NULL,
    "waqfName" TEXT NOT NULL,
    "waqfAddress" TEXT,
    "waqfPhoneNumber" INTEGER,
    "imageUrl" TEXT,

    CONSTRAINT "Waqf_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ReceiverOnWaqf" (
    "ReceiverID" INTEGER NOT NULL,
    "WaqfID" INTEGER NOT NULL,

    CONSTRAINT "ReceiverOnWaqf_pkey" PRIMARY KEY ("ReceiverID","WaqfID")
);

-- CreateTable
CREATE TABLE "WaqfCause" (
    "id" SERIAL NOT NULL,
    "waqfCause" TEXT NOT NULL,

    CONSTRAINT "WaqfCause_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CauseOnWaqf" (
    "waqfID" INTEGER NOT NULL,
    "waqfCauseID" INTEGER NOT NULL,

    CONSTRAINT "CauseOnWaqf_pkey" PRIMARY KEY ("waqfID","waqfCauseID")
);

-- CreateTable
CREATE TABLE "Transactions" (
    "id" SERIAL NOT NULL,
    "transactionDate" TIMESTAMP(3) NOT NULL,
    "transactionAmount" DOUBLE PRECISION NOT NULL,
    "transactionType" TEXT NOT NULL,
    "transactionStatus" TEXT NOT NULL,
    "transactionDescription" TEXT,
    "UserID" INTEGER NOT NULL,

    CONSTRAINT "Transactions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "History" (
    "id" SERIAL NOT NULL,
    "historyDate" TIMESTAMP(3) NOT NULL,
    "historyDescription" TEXT,
    "UserID" INTEGER NOT NULL,
    "WaqfName" TEXT NOT NULL,
    "LandfillName" TEXT NOT NULL,

    CONSTRAINT "History_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Admin_username_key" ON "Admin"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Receiver_username_key" ON "Receiver"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Receiver_bankNumber_key" ON "Receiver"("bankNumber");

-- CreateIndex
CREATE UNIQUE INDEX "Screener_username_key" ON "Screener"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Transformer_username_key" ON "Transformer"("username");

-- CreateIndex
CREATE UNIQUE INDEX "landfillArea_location_key" ON "landfillArea"("location");

-- CreateIndex
CREATE UNIQUE INDEX "Waqf_waqfName_key" ON "Waqf"("waqfName");

-- CreateIndex
CREATE UNIQUE INDEX "WaqfCause_waqfCause_key" ON "WaqfCause"("waqfCause");

-- CreateIndex
CREATE UNIQUE INDEX "Landfills_landfillName_key" ON "Landfills"("landfillName");

-- AddForeignKey
ALTER TABLE "Landfills" ADD CONSTRAINT "Landfills_landfillAreaName_fkey" FOREIGN KEY ("landfillAreaName") REFERENCES "landfillArea"("location") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TransformerOnLandfills" ADD CONSTRAINT "TransformerOnLandfills_TransformerID_fkey" FOREIGN KEY ("TransformerID") REFERENCES "Transformer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TransformerOnLandfills" ADD CONSTRAINT "TransformerOnLandfills_LandfillID_fkey" FOREIGN KEY ("LandfillID") REFERENCES "Landfills"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ScreenerOnLandfills" ADD CONSTRAINT "ScreenerOnLandfills_ScreenerID_fkey" FOREIGN KEY ("ScreenerID") REFERENCES "Screener"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ScreenerOnLandfills" ADD CONSTRAINT "ScreenerOnLandfills_LandfillID_fkey" FOREIGN KEY ("LandfillID") REFERENCES "Landfills"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReceiverOnWaqf" ADD CONSTRAINT "ReceiverOnWaqf_WaqfID_fkey" FOREIGN KEY ("WaqfID") REFERENCES "Waqf"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReceiverOnWaqf" ADD CONSTRAINT "ReceiverOnWaqf_ReceiverID_fkey" FOREIGN KEY ("ReceiverID") REFERENCES "Receiver"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CauseOnWaqf" ADD CONSTRAINT "CauseOnWaqf_waqfCauseID_fkey" FOREIGN KEY ("waqfCauseID") REFERENCES "WaqfCause"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CauseOnWaqf" ADD CONSTRAINT "CauseOnWaqf_waqfID_fkey" FOREIGN KEY ("waqfID") REFERENCES "Waqf"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transactions" ADD CONSTRAINT "Transactions_UserID_fkey" FOREIGN KEY ("UserID") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "History" ADD CONSTRAINT "History_UserID_fkey" FOREIGN KEY ("UserID") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "History" ADD CONSTRAINT "History_WaqfName_fkey" FOREIGN KEY ("WaqfName") REFERENCES "Waqf"("waqfName") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "History" ADD CONSTRAINT "History_LandfillName_fkey" FOREIGN KEY ("LandfillName") REFERENCES "Landfills"("landfillName") ON DELETE RESTRICT ON UPDATE CASCADE;
