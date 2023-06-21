import { Test, TestingModule } from '@nestjs/testing';
import { MousesController } from './mouses.controller';

describe('MousesController', () => {
  let controller: MousesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MousesController],
    }).compile();

    controller = module.get<MousesController>(MousesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
