import { PartialType } from '@nestjs/mapped-types';
import { CreateUsuarioruDto } from './create-usuarioru.dto';

export class UpdateUsuarioruDto extends PartialType(CreateUsuarioruDto) {}
