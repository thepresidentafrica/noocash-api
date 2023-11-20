/*
  Warnings:

  - A unique constraint covering the columns `[token]` on the table `OTP` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `expireAt` to the `OTP` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "OTP" ADD COLUMN     "expireAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "token" UUID NOT NULL DEFAULT gen_random_uuid();

-- CreateIndex
CREATE UNIQUE INDEX "OTP_token_key" ON "OTP"("token");
