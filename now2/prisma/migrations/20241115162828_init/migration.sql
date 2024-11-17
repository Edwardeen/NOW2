-- AlterTable
ALTER TABLE "Entity" ALTER COLUMN "picPhoneNumber" SET DATA TYPE TEXT,
ALTER COLUMN "companyPhoneNumber" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Landfills" ALTER COLUMN "landfillAreaName" SET DEFAULT 'Landfill',
ALTER COLUMN "landfillPhoneNumber" DROP NOT NULL,
ALTER COLUMN "landfillPhoneNumber" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Receiver" ALTER COLUMN "phoneNumber" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Screener" ALTER COLUMN "phoneNumber" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Transformer" ALTER COLUMN "phoneNumber" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "phoneNumber" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Waqf" ALTER COLUMN "waqfPhoneNumber" SET DATA TYPE TEXT;
