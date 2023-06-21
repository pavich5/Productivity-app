import path from "node:path";
import { fileURLToPath } from "node:url";
import { DataService } from "./data.service.js";
import { appendJSONText } from "./data.service.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const informationPath = path.join(__dirname, "information.json");

const task = {
  text: "Teach code",
  isFinished: false,
  author: "Borche",
};

const app = async () => {
  DataService.readJSONFile(informationPath, [task]);
};

app();