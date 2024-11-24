-- AlterTable
ALTER TABLE "History" ADD COLUMN     "totalScreened" INTEGER NOT NULL DEFAULT 100;

-- AlterTable
ALTER TABLE "Transactions" ALTER COLUMN "transactionAmount" SET DEFAULT 0,
ALTER COLUMN "totalScreened" SET DEFAULT 0;
