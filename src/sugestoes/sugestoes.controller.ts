import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SugestoesService } from './sugestoes.service';
import { CreateSugestoeDto } from './dto/create-sugestoe.dto';
import { UpdateSugestoeDto } from './dto/update-sugestoe.dto';

@Controller('sugestoes')
export class SugestoesController {
  constructor(private readonly sugestoesService: SugestoesService) {}

  @Post()
  create(@Body() createSugestoeDto: CreateSugestoeDto) {
    return this.sugestoesService.create(createSugestoeDto);
  }

  @Get()
  findAll() {
    return this.sugestoesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sugestoesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSugestoeDto: UpdateSugestoeDto) {
    return this.sugestoesService.update(+id, updateSugestoeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sugestoesService.remove(+id);
  }
}
