import { Injectable, NotFoundException } from '@nestjs/common';
import { readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { Car } from './interfaces/car.interface';
import { json } from 'stream/consumers';
import { CreateCarDto } from './dtos/create-car.dto';
import { v4 as uuid } from 'uuid';
import { UpdateCarDto } from './dtos/update-car.dto';

@Injectable()
export class CarsService {
  async getAllCars(model?: string, Firma?: string, year?: string) {
    const allCars = await readFile(
      join(process.cwd(), 'src', 'cars', 'data', 'cars.json'),
      'utf-8',
    );
    let cars: Car[] = JSON.parse(allCars);

    if (model) {
      cars = cars.filter((car) =>
        car.model.toLowerCase().includes(model.toLowerCase()),
      );
    }
    if (Firma) {
      cars = cars.filter((car) =>
        car.Firma.toLowerCase().includes(Firma.toLowerCase()),
      );
    }
    if (year) {
      cars = cars.filter((car) => car.year.toString() === year);
    }
    return cars;
  }

  async saveCar(cars: Car[]) {
    await writeFile(
      join(process.cwd(), 'src', 'cars', 'data', 'cars.json'),
      JSON.stringify(cars, null, 2),
    );
  }
  async getCarByID(carID: string) {
    const cars = await this.getAllCars();
    const foundCar = cars.find((car) => car.id === carID);
    if (!foundCar) throw new NotFoundException('No car with this id');
    return foundCar;
  }
  async createCar(carData: CreateCarDto) {
    const cars = await this.getAllCars();
    const newCar: Car = {
      ...carData,
      id: uuid(),
    };
    cars.push(newCar);
    await this.saveCar(cars);
    return newCar;
  }
  async updateCar(carID: string, carData: UpdateCarDto) {
    const cars = await this.getAllCars();
    const foundCar = await this.getCarByID(carID);
    Object.assign(foundCar, carData);
    const updatedCars = cars.map((car) =>
      car.id === foundCar.id ? foundCar : car,
    );
    await this.saveCar(updatedCars);
  }
  async deleteCar(carID: string) {
    const cars = await this.getAllCars();
    const updateCars = cars.filter((car) => car.id !== carID);
    if (carID.length === updateCars.length)
      throw new NotFoundException('car not found');
    await this.saveCar(updateCars);
  }
  async deleteAll() {
    let cars = [];
    await this.saveCar(cars);
  }
}
