import {Prisma} from '@prisma/client'

export class Aviso implements Prisma.AvisoUncheckedCreateInput {
    avisoId?: number;
    titulo?: string;
    data?: string | Date;
    autor?: string;
    texto?: string;
}
