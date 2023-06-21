import { IsNumber, IsString, Length, Min } from 'class-validator';

export class CreatePhoneDto {
  @IsString()
  @Length(3, 30)
  title: string;

  @IsNumber()
  @Min(0)
  stock: number;

  @IsNumber()
  @Min(0)
  price: number;

  @IsString()
  @Length(3, 30)
  description: string
}
