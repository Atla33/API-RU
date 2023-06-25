import { Test, TestingModule } from '@nestjs/testing';
import { SugestoesController } from './sugestoes.controller';
import { SugestoesService } from './sugestoes.service';

describe('SugestoesController', () => {
  let controller: SugestoesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SugestoesController],
      providers: [SugestoesService],
    }).compile();

    controller = module.get<SugestoesController>(SugestoesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
