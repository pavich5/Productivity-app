import { Module } from '@nestjs/common';
import { KeyboardController } from './keyboard.controller';
import { KeyboardService } from './keyboard.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Keyboard } from './keyboard.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Keyboard])],
  controllers: [KeyboardController],
  providers: [KeyboardService]
})
export class KeyboardModule {}
