-- CreateTable
CREATE TABLE "Usuario_RU" (
    "usuarioId" SERIAL NOT NULL,
    "email" TEXT NOT NULL DEFAULT '',
    "nome" TEXT NOT NULL DEFAULT '',
    "senha" TEXT NOT NULL DEFAULT '',
    "cargo" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "Usuario_RU_pkey" PRIMARY KEY ("usuarioId")
);

-- CreateTable
CREATE TABLE "Aviso" (
    "avisoId" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL DEFAULT '',
    "data" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "autor" TEXT NOT NULL DEFAULT '',
    "texto" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "Aviso_pkey" PRIMARY KEY ("avisoId")
);

-- CreateTable
CREATE TABLE "Cardapio_Semanal" (
    "cardapioId" SERIAL NOT NULL,
    "pratoId" INTEGER NOT NULL,
    "data" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Cardapio_Semanal_pkey" PRIMARY KEY ("cardapioId")
);

-- CreateTable
CREATE TABLE "Prato" (
    "pratoId" SERIAL NOT NULL,
    "nome" TEXT NOT NULL DEFAULT '',
    "tipo" TEXT NOT NULL DEFAULT '',
    "caloria" DECIMAL(10,2) NOT NULL DEFAULT 0,
    "vegetariano" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Prato_pkey" PRIMARY KEY ("pratoId")
);

-- CreateTable
CREATE TABLE "Sugestao" (
    "sugestoesId" SERIAL NOT NULL,
    "nome_aluno" TEXT NOT NULL DEFAULT '',
    "email_aluno" TEXT NOT NULL DEFAULT '',
    "comentario_aluno" TEXT NOT NULL DEFAULT '',
    "data" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Sugestao_pkey" PRIMARY KEY ("sugestoesId")
);

-- CreateTable
CREATE TABLE "Avaliacao" (
    "avaliacaoId" SERIAL NOT NULL,
    "refeicaoId" INTEGER NOT NULL,
    "avaliacao" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Avaliacao_pkey" PRIMARY KEY ("avaliacaoId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_RU_email_key" ON "Usuario_RU"("email");

-- AddForeignKey
ALTER TABLE "Cardapio_Semanal" ADD CONSTRAINT "Cardapio_Semanal_pratoId_fkey" FOREIGN KEY ("pratoId") REFERENCES "Prato"("pratoId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Avaliacao" ADD CONSTRAINT "Avaliacao_refeicaoId_fkey" FOREIGN KEY ("refeicaoId") REFERENCES "Prato"("pratoId") ON DELETE RESTRICT ON UPDATE CASCADE;
