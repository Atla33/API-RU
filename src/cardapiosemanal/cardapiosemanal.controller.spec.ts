import { Test, TestingModule } from '@nestjs/testing';
import { CardapiosemanalController } from './cardapiosemanal.controller';
import { CardapiosemanalService } from './cardapiosemanal.service';

describe('CardapiosemanalController', () => {
  let controller: CardapiosemanalController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CardapiosemanalController],
      providers: [CardapiosemanalService],
    }).compile();

    controller = module.get<CardapiosemanalController>(CardapiosemanalController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
