import { PartialType } from '@nestjs/mapped-types';
import { CreateCardapiosemanalDto } from './create-cardapiosemanal.dto';

export class UpdateCardapiosemanalDto extends PartialType(CreateCardapiosemanalDto) {}
