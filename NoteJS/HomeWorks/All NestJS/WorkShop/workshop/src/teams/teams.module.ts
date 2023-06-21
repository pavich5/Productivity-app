import { Module } from '@nestjs/common';
import { TeamsController } from './teams.controller';
import { TeamsService } from './teams.service';
import { Team } from './teams.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [TypeOrmModule.forFeature([Team]),UsersModule],
  controllers: [TeamsController],
  providers: [TeamsService]
})
export class TeamsModule {}
