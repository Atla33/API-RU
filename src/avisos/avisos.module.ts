import { Module } from '@nestjs/common';
import { AvisosService } from './avisos.service';
import { AvisosController } from './avisos.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [AvisosController],
  providers: [AvisosService, PrismaService]
})
export class AvisosModule {}
