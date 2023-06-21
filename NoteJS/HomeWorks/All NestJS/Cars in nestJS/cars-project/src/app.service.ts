import { Injectable, NotFoundException } from '@nestjs/common';
import { readFile, writeFile } from 'node:fs/promises'; // use the promises version of the readFile function
import { join } from 'node:path';
import { drink } from './drinks/interfaces/drinks.interfaces';
import { NotFoundError } from 'rxjs';
import { CreateCarDto } from './cars/dtos/create-car.dto';
import {  CreateDrinkDto } from './drinks/dtos/createDrink.dtos';
import { v4 as uuid } from 'uuid';
import { UpdateCarDto } from './cars/dtos/update-car.dto';
import { UpdateDrinkDto } from './drinks/dtos/update-drinks.dtos';


@Injectable()
export class AppService {
  async getAllDrinks(){
    const allDrinks = await readFile(
      join(process.cwd(), 'src', 'drinks', 'data', 'drinks.json'),
      'utf-8'
    );
    const drinks: drink[] = JSON.parse(allDrinks);
    return drinks;
  }
  async saveDrink(drinks: drink[]) {
    await writeFile(
      join(process.cwd(), 'src', 'drinks', 'data', 'drinks.json'),
      JSON.stringify(drinks, null, 2),
    );
  }
  async getDrinkbyID(drinkID: string){
    const allDrinks = await this.getAllDrinks();
    const foundDrink = allDrinks.find((drink) => drink.id === drinkID);
    if(!foundDrink) throw new NotFoundException("drink not found ");
    return foundDrink;
  }
  async createDrink(drinkData: CreateDrinkDto){
    const allDrinks = await this.getAllDrinks();
    const newDrink = {
      ...drinkData,
      id: uuid()
    }
  allDrinks.push(newDrink);
  await this.saveDrink(allDrinks)
  return newDrink
  }
  async updateDrink(drinkId: string,drinkData:UpdateDrinkDto){
    const allDrinks = await this.getAllDrinks();
    const foundDrink = await this.getDrinkbyID(drinkId);
    Object.assign(foundDrink,drinkData);
    const updatedList = allDrinks.map((drink) =>
    drink.id === foundDrink.id ? foundDrink : drink);
    await this.saveDrink(updatedList)
  }
  async deleteDrink(drinkID: string){
    const allDrinks = await this.getAllDrinks();
    const updatedList = allDrinks.filter((drink) => drink.id !== drinkID);
    if(updatedList.length === allDrinks.length) throw new NotFoundException("drink not found ")
    await this.saveDrink(updatedList);
  }
}
