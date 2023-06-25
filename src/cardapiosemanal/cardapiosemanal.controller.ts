import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CardapiosemanalService } from './cardapiosemanal.service';
import { CreateCardapiosemanalDto } from './dto/create-cardapiosemanal.dto';
import { UpdateCardapiosemanalDto } from './dto/update-cardapiosemanal.dto';

@Controller('cardapiosemanal')
export class CardapiosemanalController {
  constructor(private readonly cardapiosemanalService: CardapiosemanalService) {}

  @Post()
  create(@Body() createCardapiosemanalDto: CreateCardapiosemanalDto) {
    return this.cardapiosemanalService.create(createCardapiosemanalDto);
  }

  @Get()
  findAll() {
    return this.cardapiosemanalService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cardapiosemanalService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCardapiosemanalDto: UpdateCardapiosemanalDto) {
    return this.cardapiosemanalService.update(+id, updateCardapiosemanalDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cardapiosemanalService.remove(+id);
  }
}
