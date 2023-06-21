import { IsString, IsNumber, Min, Max, Length, IsOptional } from 'class-validator';

export class UpdateCarDto {
  @IsOptional()
  @IsString()
  @Length(2, 50)
  Firma?: string;

  @IsOptional()
  @IsString()
  @Length(2, 50)
  model?: string;

  @IsOptional()
  @IsNumber()
  @Min(1900)
  @Max(new Date().getFullYear())
  year?: number;
}
