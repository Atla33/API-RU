/*
  Warnings:

  - You are about to drop the column `caloria` on the `Prato` table. All the data in the column will be lost.
  - You are about to drop the column `vegetariano` on the `Prato` table. All the data in the column will be lost.
  - You are about to drop the `CardapioSemanalPrato` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `cardapio` to the `Cardapio_Semanal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pratoId` to the `Cardapio_Semanal` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "CardapioSemanalPrato" DROP CONSTRAINT "CardapioSemanalPrato_cardapioId_fkey";

-- DropForeignKey
ALTER TABLE "CardapioSemanalPrato" DROP CONSTRAINT "CardapioSemanalPrato_pratoId_fkey";

-- AlterTable
ALTER TABLE "Cardapio_Semanal" ADD COLUMN     "cardapio" VARCHAR NOT NULL,
ADD COLUMN     "pratoId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Prato" DROP COLUMN "caloria",
DROP COLUMN "vegetariano",
ALTER COLUMN "nome" DROP DEFAULT,
ALTER COLUMN "nome" SET DATA TYPE VARCHAR,
ALTER COLUMN "tipo" DROP DEFAULT,
ALTER COLUMN "tipo" SET DATA TYPE VARCHAR;

-- DropTable
DROP TABLE "CardapioSemanalPrato";
