-- AlterTable
ALTER TABLE "History" ADD COLUMN     "ScreenerID" INTEGER,
ADD COLUMN     "TransformerID" INTEGER;

-- AlterTable
ALTER TABLE "Transactions" ADD COLUMN     "ScreenerID" INTEGER,
ADD COLUMN     "TransformerID" INTEGER;

-- AddForeignKey
ALTER TABLE "Transactions" ADD CONSTRAINT "Transactions_ScreenerID_fkey" FOREIGN KEY ("ScreenerID") REFERENCES "Screener"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transactions" ADD CONSTRAINT "Transactions_TransformerID_fkey" FOREIGN KEY ("TransformerID") REFERENCES "Transformer"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "History" ADD CONSTRAINT "History_ScreenerID_fkey" FOREIGN KEY ("ScreenerID") REFERENCES "Screener"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "History" ADD CONSTRAINT "History_TransformerID_fkey" FOREIGN KEY ("TransformerID") REFERENCES "Transformer"("id") ON DELETE SET NULL ON UPDATE CASCADE;
