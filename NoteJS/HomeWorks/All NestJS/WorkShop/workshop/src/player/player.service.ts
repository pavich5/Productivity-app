import { Injectable, NotFoundException } from '@nestjs/common';
import { Player } from './player.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePlayerDto } from './create-players.dtos';
import { UpdatePlayerDto } from './update-player.dtos';

@Injectable()
export class PlayerService {
    @InjectRepository(Player) private playerRepo: Repository<Player>

    getAllPlayers(){
        return this.playerRepo.find({})
    }
    async getPlayerById(id:number){
        const foundPlayer = await this.playerRepo.findOne({
            where: {id },
            relations: {team:true, matches:true}
        })
        if(!foundPlayer) throw new NotFoundException("ID NOT FOUND");
        return foundPlayer
    }
    async createPlayer(data:CreatePlayerDto){
        const newPlayer = this.playerRepo.create({...data, team: {id: data.team}});
        await this.playerRepo.save(newPlayer)
        return newPlayer
    }
    async updatePlayer(id:number, data:UpdatePlayerDto){
        const foundPlayer = await this.playerRepo.findOneBy({ id });
        Object.assign(foundPlayer,data);
        await this.playerRepo.save(foundPlayer);
        return foundPlayer;
    }
    async deletePlayer(id:number){
        const foundPlayer = await this.getPlayerById(id);
        await this.playerRepo.remove(foundPlayer);
    }
}
