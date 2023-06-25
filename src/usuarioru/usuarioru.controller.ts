import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsuarioruService } from './usuarioru.service';
import { CreateUsuarioruDto } from './dto/create-usuarioru.dto';
import { UpdateUsuarioruDto } from './dto/update-usuarioru.dto';

@Controller('usuarioru')
export class UsuarioruController {
  constructor(private readonly usuarioruService: UsuarioruService) {}

  @Post()
  create(@Body() createUsuarioruDto: CreateUsuarioruDto) {
    return this.usuarioruService.create(createUsuarioruDto);
  }

  @Get()
  findAll() {
    return this.usuarioruService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usuarioruService.findOne(+id);
  }

  //findEmail(email: string) {
   // return this.prisma.usuario_RU.findUnique({
   //   where: {email},
  //  })
  //}

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUsuarioruDto: UpdateUsuarioruDto) {
    return this.usuarioruService.update(+id, updateUsuarioruDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usuarioruService.remove(+id);
  }
}
