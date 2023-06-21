import { Module } from '@nestjs/common';
import { PhonesController } from './phones.controller';
import { PhonesService } from './phones.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Phone } from './phone.entity';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [TypeOrmModule.forFeature([Phone]),UserModule],
  controllers: [PhonesController],
  providers: [PhonesService]
})
export class PhonesModule {}
