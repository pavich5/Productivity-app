"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MousesController = void 0;
const common_1 = require("@nestjs/common");
const mouses_service_1 = require("./mouses.service");
const createMouse_dto_1 = require("./dtos/createMouse.dto");
const updateData_dto_1 = require("./dtos/updateData.dto");
let MousesController = class MousesController {
    constructor(mouseService) {
        this.mouseService = mouseService;
    }
    GetAll() {
        return this.mouseService.getAllMouses();
    }
    GetByID(id) {
        return this.GetByID(id);
    }
    createMouse(mouseData) {
        return this.mouseService.createMouse(mouseData);
    }
    async updateMouse(mouseID, updateData) {
        await this.mouseService.updateMouse(mouseID, updateData);
    }
    async Delete(mouseID) {
        await this.mouseService.delete(mouseID);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MousesController.prototype, "GetAll", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Param)(`id`)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MousesController.prototype, "GetByID", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createMouse_dto_1.MouseDto]),
    __metadata("design:returntype", void 0)
], MousesController.prototype, "createMouse", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, updateData_dto_1.UpdateMouseDto]),
    __metadata("design:returntype", Promise)
], MousesController.prototype, "updateMouse", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MousesController.prototype, "Delete", null);
MousesController = __decorate([
    (0, common_1.Controller)('mouses'),
    __metadata("design:paramtypes", [mouses_service_1.MousesService])
], MousesController);
exports.MousesController = MousesController;
//# sourceMappingURL=mouses.controller.js.map