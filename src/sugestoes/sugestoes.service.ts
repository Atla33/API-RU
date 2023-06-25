import { Injectable } from '@nestjs/common';
import { CreateSugestoeDto } from './dto/create-sugestoe.dto';
import { UpdateSugestoeDto } from './dto/update-sugestoe.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SugestoesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createSugestoeDto: CreateSugestoeDto) {

    const data = createSugestoeDto;

    const createSugestoes = await this.prisma.sugestao.create({ data });

    return createSugestoeDto;
  }

  findAll() {
    return this.prisma.sugestao.findMany();
  }

  findOne(sugestoesId: number) {
    return this.prisma.sugestao.findUnique({ where: {sugestoesId}});
  }

  async update(sugestoesId: number, updateSugestoeDto: UpdateSugestoeDto) {
  
    const data = updateSugestoeDto

    const updateSugestoe = await this.prisma.sugestao.update({where: {sugestoesId}, data})

    return updateSugestoe
  }

  remove(sugestoesId: number) {
    return this.prisma.sugestao.delete({where: {sugestoesId}})
  }
}
