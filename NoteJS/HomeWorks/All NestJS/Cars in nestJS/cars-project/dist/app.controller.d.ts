import { AppService } from './app.service';
import { CreateDrinkDto } from './drinks/dtos/createDrink.dtos';
import { UpdateDrinkDto } from './drinks/dtos/update-drinks.dtos';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getAllDrinks(): Promise<import("./drinks/interfaces/drinks.interfaces").drink[]>;
    getDrinkByID(id: string): Promise<import("./drinks/interfaces/drinks.interfaces").drink>;
    createDrink(drinkData: CreateDrinkDto): Promise<{
        id: any;
        Name: string;
        year: number;
        Firma: string;
        stock: number;
    }>;
    updateDrink(drinkData: UpdateDrinkDto, id: string): Promise<void>;
    DeleteDrink(id: string): Promise<void>;
}
