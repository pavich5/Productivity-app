import { IsArray, IsNumber, IsOptional, IsString, Length, Min } from 'class-validator';
import { Player } from 'src/player/player.entity';

export class CreateMatchDto {
  @IsString()
  @Length(3, 30)
  league: string;

  @IsString()
  @Length(1, 30)
  time: string;

  @IsString()
  result: string;

  @IsOptional()
  @IsArray()
  playersId: number[];

  @IsOptional()
  @IsArray()  
  teamsId: number[];
}
