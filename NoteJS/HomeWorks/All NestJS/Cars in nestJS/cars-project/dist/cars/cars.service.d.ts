import { Car } from './interfaces/car.interface';
import { CreateCarDto } from './dtos/create-car.dto';
import { UpdateCarDto } from './dtos/update-car.dto';
export declare class CarsService {
    getAllCars(model?: string, Firma?: string, year?: string): Promise<Car[]>;
    saveCar(cars: Car[]): Promise<void>;
    getCarByID(carID: string): Promise<Car>;
    createCar(carData: CreateCarDto): Promise<Car>;
    updateCar(carID: string, carData: UpdateCarDto): Promise<void>;
    deleteCar(carID: string): Promise<void>;
    deleteAll(): Promise<void>;
}
