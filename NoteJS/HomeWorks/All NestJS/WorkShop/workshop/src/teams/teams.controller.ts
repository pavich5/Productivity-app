import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { TeamsService } from './teams.service';
import { CreateTeamDto } from './create-team.dtos';
import { updateTeamDto } from './update-team-dtos';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('teams')
export class TeamsController {
  constructor(private teamsService: TeamsService) {}

  @Get()
  getAllTeams() {
    return this.teamsService.getAllTeams();
  }

  @Get(`/:id`)
  getTeamByID(@Param(`id`) id: string) {
    return this.teamsService.getTeamById(Number(id));
  }
  @Post()
  createProduct(@Body() data: CreateTeamDto) {
    return this.teamsService.createTeam(data);
  }
  @Patch(`/:id`)
  updateTeam(@Body() data: updateTeamDto, @Param(`id`) id: string) {
    return this.teamsService.updateTeam(Number(id), data);
  }
  @Delete(`/:id`)
  deleteTeam(@Param(`id`) id: string) {
    return this.teamsService.deleteTeam(Number(id));
  }
}
