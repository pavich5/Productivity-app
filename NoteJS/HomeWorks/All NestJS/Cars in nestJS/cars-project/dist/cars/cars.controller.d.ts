import { CarsService } from './cars.service';
import { CreateCarDto } from './dtos/create-car.dto';
import { UpdateCarDto } from './dtos/update-car.dto';
export declare class CarsController {
    private carsService;
    constructor(carsService: CarsService);
    getAllCars(model?: string, Firma?: string, year?: string): Promise<import("./interfaces/car.interface").Car[]>;
    getCarByID(productId: string): Promise<import("./interfaces/car.interface").Car>;
    createCar(carData: CreateCarDto): Promise<import("./interfaces/car.interface").Car>;
    updateCar(carID: string, carData: UpdateCarDto): Promise<void>;
    deleteAll(): Promise<void>;
    deleteCar(carID: string): Promise<void>;
}
