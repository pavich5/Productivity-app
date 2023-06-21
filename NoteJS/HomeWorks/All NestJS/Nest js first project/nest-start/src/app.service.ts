import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getFucled(): string {
    return `Get fucket`;
  }
  getData() {
    return {
      title: 'Shoes',
      stock: 100,
      price: 100,
    };
  }
}
