import {Prisma} from '@prisma/client'

export class Sugestoe implements Prisma.SugestaoUncheckedCreateInput {
    sugestoesId?: number;
    nome_aluno?: string;
    email_aluno?: string;
    comentario_aluno?: string;
    data?: Date | string;
}
