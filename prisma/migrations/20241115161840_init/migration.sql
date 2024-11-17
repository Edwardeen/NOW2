-- DropForeignKey
ALTER TABLE "History" DROP CONSTRAINT "History_UserID_fkey";

-- DropForeignKey
ALTER TABLE "Transactions" DROP CONSTRAINT "Transactions_UserID_fkey";

-- AlterTable
ALTER TABLE "History" ADD COLUMN     "EntityID" INTEGER,
ALTER COLUMN "UserID" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Transactions" ADD COLUMN     "EntityID" INTEGER,
ADD COLUMN     "transactionDeposited" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "transactionScreened" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "transactionTransfered" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "transactionTransformed" BOOLEAN NOT NULL DEFAULT false,
ALTER COLUMN "UserID" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Transactions" ADD CONSTRAINT "Transactions_UserID_fkey" FOREIGN KEY ("UserID") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transactions" ADD CONSTRAINT "Transactions_EntityID_fkey" FOREIGN KEY ("EntityID") REFERENCES "Entity"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "History" ADD CONSTRAINT "History_UserID_fkey" FOREIGN KEY ("UserID") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "History" ADD CONSTRAINT "History_EntityID_fkey" FOREIGN KEY ("EntityID") REFERENCES "Entity"("id") ON DELETE SET NULL ON UPDATE CASCADE;
