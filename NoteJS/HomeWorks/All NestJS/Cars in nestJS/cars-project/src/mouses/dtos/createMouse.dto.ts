import { IsString, IsNumber, IsPositive } from 'class-validator';

export class MouseDto {
  @IsString()
  Name: string;

  @IsString()
  Model: string;

  @IsNumber()
  @IsPositive()
  Sensitivity: number;

  @IsNumber()
  @IsPositive()
  Price: number;

  @IsNumber()
  @IsPositive()
  Stock: number;
}
