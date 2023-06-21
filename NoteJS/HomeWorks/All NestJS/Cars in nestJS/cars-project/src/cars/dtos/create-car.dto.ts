import { IsString, IsNotEmpty, IsNumber, Min, Max, Length } from 'class-validator';

export class CreateCarDto {
  @IsNotEmpty()
  @IsString()
  @Length(2, 50)
  Firma: string;

  @IsNotEmpty()
  @IsString()
  @Length(2, 50)
  model: string;

  @IsNotEmpty()
  @IsNumber()
  @Min(1900)
  @Max(new Date().getFullYear())
  year: number;
}
