/*
  Warnings:

  - You are about to drop the column `pratoId` on the `Cardapio_Semanal` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Cardapio_Semanal" DROP CONSTRAINT "Cardapio_Semanal_pratoId_fkey";

-- AlterTable
ALTER TABLE "Cardapio_Semanal" DROP COLUMN "pratoId";

-- CreateTable
CREATE TABLE "CardapioSemanalPrato" (
    "cardapioId" INTEGER NOT NULL,
    "pratoId" INTEGER NOT NULL,

    CONSTRAINT "CardapioSemanalPrato_pkey" PRIMARY KEY ("cardapioId","pratoId")
);

-- AddForeignKey
ALTER TABLE "CardapioSemanalPrato" ADD CONSTRAINT "CardapioSemanalPrato_cardapioId_fkey" FOREIGN KEY ("cardapioId") REFERENCES "Cardapio_Semanal"("cardapioId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CardapioSemanalPrato" ADD CONSTRAINT "CardapioSemanalPrato_pratoId_fkey" FOREIGN KEY ("pratoId") REFERENCES "Prato"("pratoId") ON DELETE RESTRICT ON UPDATE CASCADE;
