import { IsNumber, IsString, Length, Min } from 'class-validator';

export class CreateManagerDto {
  @IsString()
  @Length(3, 30)
  firstName: string;

  @IsString()
  @Length(3, 30)
  lastName: string;

  @IsNumber()
  @Min(0)
  age: number;

  @IsNumber()
  @Min(0)
  salary: number;

  @IsNumber()
  @Min(0)
  yearsOfExpiriance: number;
}
