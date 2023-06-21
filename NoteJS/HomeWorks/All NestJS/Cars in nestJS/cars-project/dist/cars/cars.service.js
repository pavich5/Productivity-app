"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarsService = void 0;
const common_1 = require("@nestjs/common");
const promises_1 = require("node:fs/promises");
const node_path_1 = require("node:path");
const uuid_1 = require("uuid");
let CarsService = class CarsService {
    async getAllCars(model, Firma, year) {
        const allCars = await (0, promises_1.readFile)((0, node_path_1.join)(process.cwd(), 'src', 'cars', 'data', 'cars.json'), 'utf-8');
        let cars = JSON.parse(allCars);
        if (model) {
            cars = cars.filter((car) => car.model.toLowerCase().includes(model.toLowerCase()));
        }
        if (Firma) {
            cars = cars.filter((car) => car.Firma.toLowerCase().includes(Firma.toLowerCase()));
        }
        if (year) {
            cars = cars.filter((car) => car.year.toString() === year);
        }
        return cars;
    }
    async saveCar(cars) {
        await (0, promises_1.writeFile)((0, node_path_1.join)(process.cwd(), 'src', 'cars', 'data', 'cars.json'), JSON.stringify(cars, null, 2));
    }
    async getCarByID(carID) {
        const cars = await this.getAllCars();
        const foundCar = cars.find((car) => car.id === carID);
        if (!foundCar)
            throw new common_1.NotFoundException('No car with this id');
        return foundCar;
    }
    async createCar(carData) {
        const cars = await this.getAllCars();
        const newCar = Object.assign(Object.assign({}, carData), { id: (0, uuid_1.v4)() });
        cars.push(newCar);
        await this.saveCar(cars);
        return newCar;
    }
    async updateCar(carID, carData) {
        const cars = await this.getAllCars();
        const foundCar = await this.getCarByID(carID);
        Object.assign(foundCar, carData);
        const updatedCars = cars.map((car) => car.id === foundCar.id ? foundCar : car);
        await this.saveCar(updatedCars);
    }
    async deleteCar(carID) {
        const cars = await this.getAllCars();
        const updateCars = cars.filter((car) => car.id !== carID);
        if (carID.length === updateCars.length)
            throw new common_1.NotFoundException('car not found');
        await this.saveCar(updateCars);
    }
    async deleteAll() {
        let cars = [];
        await this.saveCar(cars);
    }
};
CarsService = __decorate([
    (0, common_1.Injectable)()
], CarsService);
exports.CarsService = CarsService;
//# sourceMappingURL=cars.service.js.map