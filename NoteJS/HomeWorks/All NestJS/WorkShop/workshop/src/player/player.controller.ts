import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { PlayerService } from './player.service';
import { CreatePlayerDto } from './create-players.dtos';
import { UpdatePlayerDto } from './update-player.dtos';

@Controller('players')
export class PlayerController {
    constructor(private playerService: PlayerService) {}

    @Get()
    getAllManagers() {
      return this.playerService.getAllPlayers();
    }
  
    @Get(`/:id`)
    getManagerByID(@Param(`id`) id: string) {
      return this.playerService.getPlayerById(Number(id));
    }
    @Post()
    createManager(@Body() data: CreatePlayerDto) {
      return this.playerService.createPlayer(data);
    }
    @Patch(`/:id`)
    updateManager(@Body() data: UpdatePlayerDto, @Param(`id`) id: string) {
      return this.playerService.updatePlayer(Number(id), data);
    }
    @Delete(`/:id`)
    deleteManager(@Param(`id`) id: string) {
      return this.playerService.deletePlayer(Number(id));
    }
}
