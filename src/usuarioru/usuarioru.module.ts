import { Module } from '@nestjs/common';
import { UsuarioruService } from './usuarioru.service';
import { UsuarioruController } from './usuarioru.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [UsuarioruController],
  providers: [UsuarioruService],
  exports: [UsuarioruService],
})
export class UsuarioruModule {}
