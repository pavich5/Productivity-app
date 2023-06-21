import { IsNumber, IsOptional, IsString, Length, Min } from 'class-validator';

export class UpdateManagerDto {
  @IsString()
  @IsOptional()
  @Length(3, 30)
  firstName: string;

  @IsString()
  @IsOptional()
  @Length(3, 30)
  lastName: string;

  @IsNumber()
  @IsOptional()
  @Min(0)
  age: number;

  @IsNumber()
  @IsOptional()
  @Min(0)
  salary: number;

  @IsNumber()
  @IsOptional()
  @Min(0)
  yearsOfExpiriance: number;
}
