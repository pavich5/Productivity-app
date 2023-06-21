import path from "node:path";
import { fileURLToPath } from "node:url";
import { DataService } from "./data.service.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const storagePath = path.join(__dirname, "storage.json");

const zadaca = {
  text: "asdode",
  isFinished: false,
  author: "Borche",
};

function app (){
  DataService.saveJSONFile(storagePath, [zadaca]);
}

app();