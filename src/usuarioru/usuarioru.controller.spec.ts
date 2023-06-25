import { Test, TestingModule } from '@nestjs/testing';
import { UsuarioruController } from './usuarioru.controller';
import { UsuarioruService } from './usuarioru.service';

describe('UsuarioruController', () => {
  let controller: UsuarioruController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsuarioruController],
      providers: [UsuarioruService],
    }).compile();

    controller = module.get<UsuarioruController>(UsuarioruController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
