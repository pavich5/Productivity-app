import path from "node:path";
import { fileURLToPath } from "node:url";
import { DataService } from "./data.service.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pathToJson = path.join(__dirname, "info.json");

const zadaca = {
  text: "asdode",
  isFinished: false,
  author: "Borche",
};

function app(){
    return DataService.saveFileData(pathToJson,[zadaca])
}

app();


