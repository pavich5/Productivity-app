import { IsNumber, IsOptional, IsString, Length, Min } from 'class-validator';

export class updatePhoneDto {
  @IsString()
  @IsOptional()
  @Length(3, 30)
  title: string;

  @IsNumber()
  @IsOptional()
  @Min(0)
  stock: number;

  @IsNumber()
  @IsOptional()
  @Min(0)
  price: number;

  @IsString()
  @IsOptional()
  @Length(3, 30)
  description: string
}
