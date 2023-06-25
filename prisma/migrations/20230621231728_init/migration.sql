/*
  Warnings:

  - You are about to alter the column `caloria` on the `Prato` table. The data in that column could be lost. The data in that column will be cast from `Decimal(10,2)` to `Integer`.

*/
-- AlterTable
ALTER TABLE "Prato" ALTER COLUMN "caloria" SET DEFAULT 0,
ALTER COLUMN "caloria" SET DATA TYPE INTEGER;
