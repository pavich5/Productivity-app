import { IsArray, IsNumber, IsOptional, IsString, Length, Min, isArray } from 'class-validator';

export class CreateTeamDto {
  @IsString()
  @Length(3, 30)
  name: string;

  @IsNumber()
  @Min(0)
  ranking: number;

  @IsNumber()
  @Min(0)
  budget: number;

  @IsNumber()
  @IsOptional()
  managerId: number;

  @IsOptional()
  @IsArray()
  playerId:number[]
}
