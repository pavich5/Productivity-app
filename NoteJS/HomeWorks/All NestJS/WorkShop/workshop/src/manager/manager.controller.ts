import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { ManagerService } from './manager.service';
import { CreateManagerDto } from './createManager.dtos';
import { UpdateManagerDto } from './updateManager.dtos';
import { AuthGuard } from 'src/auth/auth.guard';


@Controller('managers')
export class ManagerController {
    constructor(private managerService: ManagerService) {}

  @Get()
  getAllManagers() {
    return this.managerService.getAllManagers();
  }

  @Get(`/:id`)
  getManagerByID(@Param(`id`) id: string) {
    return this.managerService.getManagerById(Number(id));
  }
  @Post()
  createManager(@Body() data: CreateManagerDto) {
    return this.managerService.createManager(data);
  }
  @Patch(`/:id`)
  updateManager(@Body() data: UpdateManagerDto, @Param(`id`) id: string) {
    return this.managerService.updateManager(Number(id), data);
  }
  @Delete(`/:id`)
  deleteManager(@Param(`id`) id: string) {
    return this.managerService.deleteManager(Number(id));
  }
}
