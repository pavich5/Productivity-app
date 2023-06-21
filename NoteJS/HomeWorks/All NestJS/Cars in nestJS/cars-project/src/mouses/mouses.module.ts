import { Module } from '@nestjs/common';
import { MousesController } from './mouses.controller';
import { MousesService } from './mouses.service';

@Module({
  controllers: [MousesController],
  providers: [MousesService]
})
export class MousesModule {}
