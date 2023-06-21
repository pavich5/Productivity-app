import { Module } from '@nestjs/common';
import { ManagerController } from './manager.controller';
import { ManagerService } from './manager.service';
import { Manager } from './manager.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [TypeOrmModule.forFeature([Manager]),UsersModule],
  controllers: [ManagerController],
  providers: [ManagerService]
})
export class ManagerModule {}
