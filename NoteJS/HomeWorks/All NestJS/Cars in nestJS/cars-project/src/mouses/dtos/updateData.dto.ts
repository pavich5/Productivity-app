import { IsString, IsNumber, IsPositive, IsOptional } from 'class-validator';

export class UpdateMouseDto {
  @IsOptional()
  @IsString()
  Name?: string;

  @IsOptional()
  @IsString()
  Model?: string;

  @IsOptional()
  @IsNumber()
  @IsPositive()
  Sensitivity?: number;

  @IsOptional()
  @IsNumber()
  @IsPositive()
  Price?: number;

  @IsOptional()
  @IsNumber()
  @IsPositive()
  Stock?: number;
}
