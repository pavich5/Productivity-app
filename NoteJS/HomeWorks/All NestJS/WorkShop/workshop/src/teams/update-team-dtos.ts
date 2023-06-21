import { IsNumber, IsOptional, IsString, Length, Min } from 'class-validator';

export class updateTeamDto {

    @IsOptional()
    @IsString()
  @Length(3, 30)
  name: string;

  @IsOptional()
  @IsNumber()
  @Min(0)
  ranking: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  budget: number;

  @IsOptional()
  @IsString()
  managerId: string;
}
