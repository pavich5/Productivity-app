import { MousesService } from './mouses.service';
import { MouseDto } from './dtos/createMouse.dto';
import { UpdateMouseDto } from './dtos/updateData.dto';
export declare class MousesController {
    private mouseService;
    constructor(mouseService: MousesService);
    GetAll(): Promise<import("./Interface/mouse.interface").Mouse[]>;
    GetByID(id: string): any;
    createMouse(mouseData: MouseDto): Promise<import("./Interface/mouse.interface").Mouse>;
    updateMouse(mouseID: string, updateData: UpdateMouseDto): Promise<void>;
    Delete(mouseID: string): Promise<void>;
}
