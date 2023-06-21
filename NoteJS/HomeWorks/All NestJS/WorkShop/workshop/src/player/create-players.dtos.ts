import { IsNumber, IsOptional, IsString, Length, Min } from 'class-validator';

export class CreatePlayerDto {
  @IsString()
  @Length(3, 30)
  firstName: string;

  @IsString()
  @Length(3, 30)
  lastName: string;

  @IsNumber()
  @Min(0)
  ranking: number;

  @IsNumber()
  @Min(0)
  salary: number;

  @IsOptional()
  @IsNumber()
  team:number
}

