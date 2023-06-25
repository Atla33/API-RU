import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateAvaliacoeDto } from './dto/create-avaliacoe.dto';
import { UpdateAvaliacoeDto } from './dto/update-avaliacoe.dto';

@Injectable()
export class AvaliacoesService {
  constructor(private prisma: PrismaService) {}

  async create(createAvaliacaoDto: CreateAvaliacoeDto) {
    const { pratoId, avaliacao } = createAvaliacaoDto;
    return this.prisma.avaliacao.create({
      data: {
        pratoId,
        avaliacao,
      },
    });
  }

  async findAll() {
    return this.prisma.avaliacao.findMany();
  }

  async findOne(id: number) {
    return this.prisma.avaliacao.findUnique({
      where: { avaliacaoId: id },
      include: { prato: true },
    });
  }

  async update(id: number, updateAvaliacaoDto: UpdateAvaliacoeDto) {
    const { pratoId, avaliacao } = updateAvaliacaoDto;
    return this.prisma.avaliacao.update({
      where: { avaliacaoId: id },
      data: {
        pratoId,
        avaliacao,
      },
    });
  }

  async remove(id: number) {
    return this.prisma.avaliacao.delete({
      where: { avaliacaoId: id },
    });
  }
}