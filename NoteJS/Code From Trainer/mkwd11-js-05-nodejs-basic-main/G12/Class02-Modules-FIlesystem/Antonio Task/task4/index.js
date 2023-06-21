import path from "node:path";
import { fileURLToPath } from "node:url";
import { DataService } from "./data.service.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const storagePath = path.join(__dirname, "inforamtion.json");

const zadaca = {
  text: "asdode",
  isFinished: false,
  author: "Borche",
};
const zadaca2= {
    text: "asdode",
    isFinished: false,
    author: "Borche",
  };

function app(){
    return DataService.saveFileData(storagePath,[zadaca,zadaca2],);
}

app()