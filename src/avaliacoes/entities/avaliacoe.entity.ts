import { Prisma } from '@prisma/client';

export class Avaliacao implements Prisma.AvaliacaoUncheckedCreateInput {
  avaliacaoId: number;
  pratoId: number;
  avaliacao: boolean;
}

