import { Avaliacao } from "@prisma/client";
import { IsInt, IsBoolean } from "class-validator";

export class CreateAvaliacoeDto implements Avaliacao {

    avaliacaoId: number

    @IsInt()
    pratoId: number;
  
    @IsBoolean()
    avaliacao: boolean;
    
}
