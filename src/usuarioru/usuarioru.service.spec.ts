import { Test, TestingModule } from '@nestjs/testing';
import { UsuarioruService } from './usuarioru.service';

describe('UsuarioruService', () => {
  let service: UsuarioruService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsuarioruService],
    }).compile();

    service = module.get<UsuarioruService>(UsuarioruService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
