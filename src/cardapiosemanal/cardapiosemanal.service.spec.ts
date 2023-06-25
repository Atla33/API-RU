import { Test, TestingModule } from '@nestjs/testing';
import { CardapiosemanalService } from './cardapiosemanal.service';

describe('CardapiosemanalService', () => {
  let service: CardapiosemanalService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CardapiosemanalService],
    }).compile();

    service = module.get<CardapiosemanalService>(CardapiosemanalService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
