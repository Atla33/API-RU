import { PartialType } from '@nestjs/mapped-types';
import { CreateSugestoeDto } from './create-sugestoe.dto';

export class UpdateSugestoeDto extends PartialType(CreateSugestoeDto) {}
