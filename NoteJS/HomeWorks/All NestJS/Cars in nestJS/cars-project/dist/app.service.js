"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const promises_1 = require("node:fs/promises");
const node_path_1 = require("node:path");
const uuid_1 = require("uuid");
let AppService = class AppService {
    async getAllDrinks() {
        const allDrinks = await (0, promises_1.readFile)((0, node_path_1.join)(process.cwd(), 'src', 'drinks', 'data', 'drinks.json'), 'utf-8');
        const drinks = JSON.parse(allDrinks);
        return drinks;
    }
    async saveDrink(drinks) {
        await (0, promises_1.writeFile)((0, node_path_1.join)(process.cwd(), 'src', 'drinks', 'data', 'drinks.json'), JSON.stringify(drinks, null, 2));
    }
    async getDrinkbyID(drinkID) {
        const allDrinks = await this.getAllDrinks();
        const foundDrink = allDrinks.find((drink) => drink.id === drinkID);
        if (!foundDrink)
            throw new common_1.NotFoundException("drink not found ");
        return foundDrink;
    }
    async createDrink(drinkData) {
        const allDrinks = await this.getAllDrinks();
        const newDrink = Object.assign(Object.assign({}, drinkData), { id: (0, uuid_1.v4)() });
        allDrinks.push(newDrink);
        await this.saveDrink(allDrinks);
        return newDrink;
    }
    async updateDrink(drinkId, drinkData) {
        const allDrinks = await this.getAllDrinks();
        const foundDrink = await this.getDrinkbyID(drinkId);
        Object.assign(foundDrink, drinkData);
        const updatedList = allDrinks.map((drink) => drink.id === foundDrink.id ? foundDrink : drink);
        await this.saveDrink(updatedList);
    }
    async deleteDrink(drinkID) {
        const allDrinks = await this.getAllDrinks();
        const updatedList = allDrinks.filter((drink) => drink.id !== drinkID);
        if (updatedList.length === allDrinks.length)
            throw new common_1.NotFoundException("drink not found ");
        await this.saveDrink(updatedList);
    }
};
AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map