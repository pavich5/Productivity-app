import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateManagerDto } from './createManager.dtos';
import { UpdateManagerDto } from './updateManager.dtos';
import { Manager } from './manager.entity';

@Injectable()
export class ManagerService {
  @InjectRepository(Manager) private managerRepo: Repository<Manager>;

  getAllManagers() {
    return this.managerRepo.find({});
  }

  async getManagerById(id: number) {
    const manager = await this.managerRepo.findOne({
        where: { id },
        relations: {  
        team: true
      },
    });

    if (!manager) throw new NotFoundException('Manager not found');

    return manager;
  }

  async createManager(data: CreateManagerDto) {
    const newManager = this.managerRepo.create(data);
    await this.managerRepo.save(newManager);
    return newManager;
  }

  async updateManager(id: number, data: UpdateManagerDto) {
    const foundManager = await this.managerRepo.findOneBy({ id });
    Object.assign(foundManager, data);
    await this.managerRepo.save(foundManager);
    return foundManager;
  }

  async deleteManager(id: number) {
    const foundManager = await this.getManagerById(id);
    await this.managerRepo.remove(foundManager);
  }
}
