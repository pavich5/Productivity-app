import { Injectable, NotFoundException } from '@nestjs/common';
import { join } from 'path';
import { Mouse } from './Interface/mouse.interface';
import { readFile, writeFile } from 'fs/promises';
import { MouseDto } from './dtos/createMouse.dto';
import { v4 as uuid } from 'uuid';
import { UpdateMouseDto } from './dtos/updateData.dto';
import { throws } from 'assert';




@Injectable()
export class MousesService {
  async getAllMouses(){
    const path = join(process.cwd(), 'src', 'mouses', 'data', 'mouses.json');
    const data = await readFile(path, 'utf-8');
    const mouses: Mouse[] = JSON.parse(data);
    return mouses;
  }
  async saveMouse(mouse: Mouse[]) {
    await writeFile(
      join(process.cwd(), 'src', 'mouses', 'data', 'mouses.json'),
      JSON.stringify(mouse, null, 2),
    );
  }
  async getMouseByID(mouseID: string){
    const allMouses = await this.getAllMouses();
    const foundMouse = allMouses.find((mouse)=> mouse.id === mouseID);
    if(!foundMouse) throw new NotFoundException(`Mouse not found`);
    return foundMouse
  }
  async createMouse(mouseData: MouseDto) {
    const allMouses = await this.getAllMouses();
    const newMouse: Mouse = {
    ...mouseData,
      id: uuid(),
    };
    allMouses.push(newMouse);
    await this.saveMouse(allMouses);
    return newMouse;
  }
  async updateMouse(mouseID: string, updateData: UpdateMouseDto) {
    const allMouses = await this.getAllMouses();
    const foundMouse = await this.getMouseByID(mouseID);
    Object.assign(foundMouse, updateData);
    const updated = allMouses.map((mouse)=> mouse.id === foundMouse.id ? foundMouse : mouse)
    await this.saveMouse(updated);
    return foundMouse;
  }
  async delete(id:string){
    const allMouses = await this.getAllMouses();
    const updatedList = allMouses.filter((mouse)=> mouse.id !== id);
    if(updatedList.length === allMouses.length) throw new NotFoundException(`Mouse not found`)
    await this.saveMouse(updatedList);
  }
}
