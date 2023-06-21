import { Test, TestingModule } from '@nestjs/testing';
import { MathcesController } from './mathces.controller';

describe('MathcesController', () => {
  let controller: MathcesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MathcesController],
    }).compile();

    controller = module.get<MathcesController>(MathcesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
