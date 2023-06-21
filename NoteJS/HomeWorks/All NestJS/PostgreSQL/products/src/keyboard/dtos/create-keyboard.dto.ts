import { IsNumber, IsString, Length, Min } from 'class-validator';

export class CreateKeyboardDto {
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
  @Length(3, 12)
  Type: string
}
