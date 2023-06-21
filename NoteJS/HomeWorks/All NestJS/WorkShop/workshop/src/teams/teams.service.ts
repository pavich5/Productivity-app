import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTeamDto } from './create-team.dtos';
import { updateTeamDto } from './update-team-dtos';
import { Team } from './teams.entity';

@Injectable()
export class TeamsService {
    @InjectRepository(Team) private teamsRepo: Repository<Team>

    getAllTeams(){
        return this.teamsRepo.find({})
    }
    async getTeamById(id: number){
        const team = await this.teamsRepo.findOne({
            where: { id },
            relations: {manager:true, players:true}
        });
        if (!team) {
          throw new NotFoundException(`Team with id ${id} not found`);
        }
        return team;
      }
    async createTeam(data:CreateTeamDto){
        const newTeam = this.teamsRepo.create({
            ...data,
             manager: {id: data.managerId},
             players: data.playerId.map((player) => {
                return {
                    id:player
                }
             })
           }
             
             );
        await this.teamsRepo.save(newTeam)
        return newTeam
    }
    async updateTeam(id:number, data:updateTeamDto){
        const foundTeam = await this.teamsRepo.findOneBy({ id });
        Object.assign(foundTeam,data);
        await this.teamsRepo.save(foundTeam);
        return foundTeam;
    }
    async deleteTeam(id:number){
        const foundTeam = await this.getTeamById(id);
        await this.teamsRepo.remove(foundTeam);
    }
}
