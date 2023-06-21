import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Matches } from './matches.entity';
import { Repository } from 'typeorm';
import { CreateMatchDto } from './create-match.dto';
import { UpdateMatchDto } from './update-match.dtos';
import { log } from 'console';

@Injectable()
export class MathcesService {
    @InjectRepository(Matches) private mathcesRepo: Repository<Matches>;

  getAllMathces() {
    return this.mathcesRepo.find({});
  }

  async getMathceById(id: number) {
    const match = await this.mathcesRepo.findOne({
        where: { id },
        relations: {players: true, team:true}
    });

    if (!match) throw new NotFoundException('Match not found');
    return match;
  }

  async createMathc(data: CreateMatchDto) {
    const newMatch = this.mathcesRepo.create({
       ...data,
       players: data.playersId.map((player) => {
        console.log(player)
        return {
          id:player
        }
       }),
       team: data.teamsId.map((team) => {
        return {
          id:team
        }
       })
    });
    await this.mathcesRepo.save(newMatch);
    return newMatch;
  }

  async updateMathc(id: number, data: UpdateMatchDto) {
    const foundMatch = await this.mathcesRepo.findOneBy({ id });
    Object.assign(foundMatch, data);
    await this.mathcesRepo.save(foundMatch);
    return foundMatch;
  }

  async deleteMathc(id: number) {
    const foundMatch = await this.getMathceById(id);
    await this.mathcesRepo.remove(foundMatch);
  }
}
