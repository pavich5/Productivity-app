import { Module } from '@nestjs/common';
import { MathcesController } from './mathces.controller';
import { MathcesService } from './mathces.service';
import { Matches } from './matches.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Matches])],
  controllers: [MathcesController],
  providers: [MathcesService]
})
export class MathcesModule {}
