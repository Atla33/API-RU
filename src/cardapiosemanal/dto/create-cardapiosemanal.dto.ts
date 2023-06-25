import { Cardapio_Semanal } from "@prisma/client";
import { IsString, Length } from "class-validator";

export class CreateCardapiosemanalDto implements Cardapio_Semanal {
    
    cardapioId: number

    @IsString({ message: "O cardapio deve ser uma string." })
    @Length(5, 500, { message: "O cardapio deve ter entre 5 e 500 caracteres." })
    cardapio: string

    data: Date
    
    @IsString({ message: "O dia da semana deve ser uma string." })
    @Length(5, 50, { message: "O dia da semana deve ter entre 5 e 50 caracteres." })
    dia_da_semana: string
}
