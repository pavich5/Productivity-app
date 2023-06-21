import { IsString, IsNumber, Min, Max, Length, IsOptional, IsNotEmpty } from 'class-validator';

export class UpdateDrinkDto {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  Name?: string;

  @IsOptional()
  @IsNumber()
  @Min(1900)
  @Max(2030)
  year?: number;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  Firma?: string;

  @IsOptional()
  @IsNumber()
  @Min(0)
  stock?: number;
}
