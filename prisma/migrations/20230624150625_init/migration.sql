/*
  Warnings:

  - You are about to drop the column `refeicaoId` on the `Avaliacao` table. All the data in the column will be lost.
  - Added the required column `pratoId` to the `Avaliacao` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Avaliacao" DROP CONSTRAINT "Avaliacao_refeicaoId_fkey";

-- AlterTable
ALTER TABLE "Avaliacao" DROP COLUMN "refeicaoId",
ADD COLUMN     "pratoId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Avaliacao" ADD CONSTRAINT "Avaliacao_pratoId_fkey" FOREIGN KEY ("pratoId") REFERENCES "Prato"("pratoId") ON DELETE RESTRICT ON UPDATE CASCADE;
