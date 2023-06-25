import { Module } from '@nestjs/common';
import { SugestoesService } from './sugestoes.service';
import { SugestoesController } from './sugestoes.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [SugestoesController],
  providers: [SugestoesService, PrismaService]
})
export class SugestoesModule {}
