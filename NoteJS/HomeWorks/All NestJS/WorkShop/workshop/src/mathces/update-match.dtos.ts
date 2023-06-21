import { IsNumber, IsOptional, IsString, Length, Min } from 'class-validator';

export class UpdateMatchDto {
  @IsString()
  @IsOptional()
  @Length(3, 30)
  league: string;

  @IsOptional()
  @IsString()
  @Length(1, 30)
  time: string;

  @IsString()
  @IsOptional()
  @Min(0)
  result: string;
}
