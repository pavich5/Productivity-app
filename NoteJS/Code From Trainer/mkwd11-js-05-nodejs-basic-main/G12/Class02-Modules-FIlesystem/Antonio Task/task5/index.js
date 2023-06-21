import path from "node:path";
import { fileURLToPath } from "node:url";
import { DataService } from "./data.service.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const storagePath = path.join(__dirname, "inforamtion.json");

const zadaca = {
    text: "asdode",
    isFinished: false,
    author: "Borche",
    king: "pavich"
  };

function app (){
    return DataService.saveFileData(storagePath,[zadaca]);
}

app();