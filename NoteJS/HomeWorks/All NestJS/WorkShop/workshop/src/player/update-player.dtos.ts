import { IsNumber, IsOptional, IsString, Length, Min } from 'class-validator';

export class UpdatePlayerDto {
  @IsString()
  @IsOptional()
  @Length(3, 30)
  firstName: string;

  @IsString()
  @IsOptional()
  @Length(3, 30)
  lastName: string;

  @IsNumber()
  @Min(0)
  @IsOptional()
  ranking: number;

  @IsNumber()
  @Min(0)
  @IsOptional()
  salary: number;
}
