import { IsString, IsNotEmpty, IsNumber, Min, Max, Length } from 'class-validator';

export class CreateDrinkDto {
  @IsString()
  @IsNotEmpty()
  Name: string;

  @IsNumber()
  @Min(1900)
  @Max(2030)
  year: number;

  @IsString()
  @IsNotEmpty()
  Firma: string;

  @IsNumber()
  @Min(0)
  stock: number;
}
