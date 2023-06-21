import { writeFile, readFile } from "node:fs/promises";

export class DataService {
    static async readFilePath(path){
        const data = readFile(path,"utf-8");
        return JSON.parse(data);
    }

    static async saveFileData(path,data){
        return writeFile(path,JSON.stringify(data, 0, 2));
    }
}