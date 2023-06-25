import { Sugestao } from "@prisma/client";
import { IsDate, IsDateString, IsString, Length } from "class-validator";

export class CreateSugestoeDto implements Sugestao {

    sugestoesId: number;
    @IsString({ message: "O nome do aluno deve ser uma string." })
    @Length(5, 50, { message: "O nome do aluno deve ter entre 5 e 50 caracteres." })
    nome_aluno: string;
    @IsString({ message: "O email do aluno deve ser uma string." })
    email_aluno: string;
    @IsString({ message: "O comentário do aluno deve ser uma string." })
    @Length(10, 500, { message: "O comentário do aluno deve ter entre 10 e 500 caracteres." })
    comentario_aluno: string;
    @IsDate({ message: "A data deve estar no formato ISO 8601." })
    data: Date;
}
