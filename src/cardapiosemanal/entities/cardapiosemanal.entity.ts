import {Prisma} from '@prisma/client'

export class Cardapiosemanal implements Prisma.Cardapio_SemanalUncheckedCreateInput {
    cardapioId?: number
    cardapio: string
    data?: Date | string
    dia_da_semana: string
}
