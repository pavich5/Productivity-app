"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MousesService = void 0;
const common_1 = require("@nestjs/common");
const path_1 = require("path");
const promises_1 = require("fs/promises");
const uuid_1 = require("uuid");
let MousesService = class MousesService {
    async getAllMouses() {
        const path = (0, path_1.join)(process.cwd(), 'src', 'mouses', 'data', 'mouses.json');
        const data = await (0, promises_1.readFile)(path, 'utf-8');
        const mouses = JSON.parse(data);
        return mouses;
    }
    async saveMouse(mouse) {
        await (0, promises_1.writeFile)((0, path_1.join)(process.cwd(), 'src', 'mouses', 'data', 'mouses.json'), JSON.stringify(mouse, null, 2));
    }
    async getMouseByID(mouseID) {
        const allMouses = await this.getAllMouses();
        const foundMouse = allMouses.find((mouse) => mouse.id === mouseID);
        if (!foundMouse)
            throw new common_1.NotFoundException(`Mouse not found`);
        return foundMouse;
    }
    async createMouse(mouseData) {
        const allMouses = await this.getAllMouses();
        const newMouse = Object.assign(Object.assign({}, mouseData), { id: (0, uuid_1.v4)() });
        allMouses.push(newMouse);
        await this.saveMouse(allMouses);
        return newMouse;
    }
    async updateMouse(mouseID, updateData) {
        const allMouses = await this.getAllMouses();
        const foundMouse = await this.getMouseByID(mouseID);
        Object.assign(foundMouse, updateData);
        const updated = allMouses.map((mouse) => mouse.id === foundMouse.id ? foundMouse : mouse);
        await this.saveMouse(updated);
        return foundMouse;
    }
    async delete(id) {
        const allMouses = await this.getAllMouses();
        const updatedList = allMouses.filter((mouse) => mouse.id !== id);
        if (updatedList.length === allMouses.length)
            throw new common_1.NotFoundException(`Mouse not found`);
        await this.saveMouse(updatedList);
    }
};
MousesService = __decorate([
    (0, common_1.Injectable)()
], MousesService);
exports.MousesService = MousesService;
//# sourceMappingURL=mouses.service.js.map