import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCardapiosemanalDto } from './dto/create-cardapiosemanal.dto';
import { UpdateCardapiosemanalDto } from './dto/update-cardapiosemanal.dto';

@Injectable()
export class CardapiosemanalService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateCardapiosemanalDto) {
    return this.prisma.cardapio_Semanal.create({ data });
  }

  async findAll() {
    return this.prisma.cardapio_Semanal.findMany();
  }

  async findOne(cardapioId: number) {
    return this.prisma.cardapio_Semanal.findUnique({ where: { cardapioId } });
  }

  async update(cardapioId: number, data: UpdateCardapiosemanalDto) {
    return this.prisma.cardapio_Semanal.update({ where: { cardapioId }, data });
  }

  async remove(cardapioId: number) {
    return this.prisma.cardapio_Semanal.delete({ where: { cardapioId } });
  }
}
