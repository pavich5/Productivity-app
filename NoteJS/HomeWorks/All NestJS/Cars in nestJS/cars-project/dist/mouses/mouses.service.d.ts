import { Mouse } from './Interface/mouse.interface';
import { MouseDto } from './dtos/createMouse.dto';
import { UpdateMouseDto } from './dtos/updateData.dto';
export declare class MousesService {
    getAllMouses(): Promise<Mouse[]>;
    saveMouse(mouse: Mouse[]): Promise<void>;
    getMouseByID(mouseID: string): Promise<Mouse>;
    createMouse(mouseData: MouseDto): Promise<Mouse>;
    updateMouse(mouseID: string, updateData: UpdateMouseDto): Promise<Mouse>;
    delete(id: string): Promise<void>;
}
