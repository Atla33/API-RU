import { Aviso } from "@prisma/client";
import { IsDate, IsString, Length } from "class-validator";

export class CreateAvisoDto implements Aviso {

    avisoId: number;
    @IsString({ message: "O título deve ser uma string." })
    @Length(5, 50, { message: "O título deve ter entre 5 e 50 caracteres." })
    titulo: string;
    @IsDate({ message: "A data deve estar no formato ISO 8601." })
    data: Date;
    @IsString({ message: "O autor deve ser uma string." })
    autor: string;
    @IsString({ message: "O texto deve ser uma string." })
    @Length(10, 500, { message: "O texto deve ter entre 10 e 500 caracteres." })
    texto: string;
}

