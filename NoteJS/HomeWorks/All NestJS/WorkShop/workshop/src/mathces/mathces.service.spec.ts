import { Test, TestingModule } from '@nestjs/testing';
import { MathcesService } from './mathces.service';

describe('MathcesService', () => {
  let service: MathcesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MathcesService],
    }).compile();

    service = module.get<MathcesService>(MathcesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
