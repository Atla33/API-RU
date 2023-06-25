/*
  Warnings:

  - Added the required column `dia_da_semana` to the `Cardapio_Semanal` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Cardapio_Semanal" ADD COLUMN     "dia_da_semana" VARCHAR NOT NULL;
