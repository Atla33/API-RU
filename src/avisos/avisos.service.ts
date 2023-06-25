import { Injectable } from '@nestjs/common';
import { CreateAvisoDto } from './dto/create-aviso.dto';
import { UpdateAvisoDto } from './dto/update-aviso.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AvisosService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createAvisoDto: CreateAvisoDto) {
    const data = createAvisoDto;

    const cretatedAvisos = await this.prisma.aviso.create({ data });

    return createAvisoDto;
  }

  findAll() {
    return this.prisma.aviso.findMany();
  }

  findOne(avisoId: number) {
    return this.prisma.aviso.findUnique({ where: { avisoId } });
  }

 async update(avisoId: number, updateAvisoDto: UpdateAvisoDto) {

  const data = updateAvisoDto

  const updtatedAviso = await this.prisma.aviso.update({where: {avisoId}, data})

    return updtatedAviso
  }

  remove(avisoId: number) {
    return this.prisma.aviso.delete({where: {avisoId}})
  }
}
