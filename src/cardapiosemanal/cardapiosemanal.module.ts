import { Module } from '@nestjs/common';
import { CardapiosemanalService } from './cardapiosemanal.service';
import { CardapiosemanalController } from './cardapiosemanal.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [CardapiosemanalController],
  providers: [CardapiosemanalService, PrismaService]
})
export class CardapiosemanalModule {}
