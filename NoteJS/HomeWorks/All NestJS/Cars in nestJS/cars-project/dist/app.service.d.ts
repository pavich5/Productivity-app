import { drink } from './drinks/interfaces/drinks.interfaces';
import { CreateDrinkDto } from './drinks/dtos/createDrink.dtos';
import { UpdateDrinkDto } from './drinks/dtos/update-drinks.dtos';
export declare class AppService {
    getAllDrinks(): Promise<drink[]>;
    saveDrink(drinks: drink[]): Promise<void>;
    getDrinkbyID(drinkID: string): Promise<drink>;
    createDrink(drinkData: CreateDrinkDto): Promise<{
        id: any;
        Name: string;
        year: number;
        Firma: string;
        stock: number;
    }>;
    updateDrink(drinkId: string, drinkData: UpdateDrinkDto): Promise<void>;
    deleteDrink(drinkID: string): Promise<void>;
}
