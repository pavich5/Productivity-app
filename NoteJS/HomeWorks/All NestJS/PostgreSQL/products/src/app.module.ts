import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { KeyboardModule } from './keyboard/keyboard.module';

@Module({
  imports: [ProductsModule,
   ProductsModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'drvarastat123',
      database: 'postgres',
      synchronize: true,
      autoLoadEntities: true,
    }),
    KeyboardModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
