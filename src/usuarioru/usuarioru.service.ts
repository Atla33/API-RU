import { Injectable } from '@nestjs/common';
import { CreateUsuarioruDto } from './dto/create-usuarioru.dto';
import { UpdateUsuarioruDto } from './dto/update-usuarioru.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsuarioruService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUsuarioruDto: CreateUsuarioruDto) {
    const data = {
      ...createUsuarioruDto,
      senha: await bcrypt.hash(createUsuarioruDto.senha, 10),
    };

   const createdUsuarioru = await this.prisma.usuario_RU.create({data});

    return {
      ...createdUsuarioru,
      senha: undefined
    };
  }

  findAll() {
    return `This action returns all usuarioru`;
  }

  findOne(id: number) {
    return `This action returns a #${id} usuarioru`;
  }

  findEmail(email: string) {
    return this.prisma.usuario_RU.findUnique({
      where: {email},
    })
  }

  update(id: number, updateUsuarioruDto: UpdateUsuarioruDto) {
    return `This action updates a #${id} usuarioru`;
  }

  remove(id: number) {
    return `This action removes a #${id} usuarioru`;
  }
}
