import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePratoDto } from './dto/create-prato.dto';
import { UpdatePratoDto } from './dto/update-prato.dto';

@Injectable()
export class PratosService {
  constructor(private prisma: PrismaService) {}

  async create(createPratoDto: CreatePratoDto) {
    return this.prisma.prato.create({
      data: createPratoDto,
    });
  }

  async findAll() {
    return this.prisma.prato.findMany({
      include: {
        avaliacoes: true,
      },
    });
  }

  async findOne(id: number) {
    return this.prisma.prato.findUnique({
      where: { pratoId: id },
      include: {
        avaliacoes: true,
      },
    });
  }

  async update(id: number, updatePratoDto: UpdatePratoDto) {
    return this.prisma.prato.update({
      where: { pratoId: id },
      data: updatePratoDto,
      include: {
        avaliacoes: true,
      },
    });
  }

  async remove(id: number) {
    return this.prisma.prato.delete({
      where: { pratoId: id },
    });
  }
}

