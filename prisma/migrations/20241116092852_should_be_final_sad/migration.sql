-- AlterTable
ALTER TABLE "Transactions" ADD COLUMN     "LandfillsID" INTEGER,
ADD COLUMN     "WaqfID" INTEGER;

-- AddForeignKey
ALTER TABLE "Transactions" ADD CONSTRAINT "Transactions_WaqfID_fkey" FOREIGN KEY ("WaqfID") REFERENCES "Waqf"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transactions" ADD CONSTRAINT "Transactions_LandfillsID_fkey" FOREIGN KEY ("LandfillsID") REFERENCES "Landfills"("id") ON DELETE SET NULL ON UPDATE CASCADE;
