import { IsString } from 'class-validator';

export class CreatePratoDto {
  @IsString()
  nome: string;

  @IsString()
  tipo: string;
}
