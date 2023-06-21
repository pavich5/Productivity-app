import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  readFileSync,
  writeFileSync,
  appendFileSync,
  writeFile,
  readFile,
  appendFile,
} from "node:fs";


const __dirname = path.dirname(fileURLToPath(import.meta.url));


const notesPath = path.join(__dirname, "kurac.txt");


writeFileSync(notesPath, "mau!", { encoding: "utf-8" });

const notesData = readFileSync(notesPath, { encoding: "utf-8" });


appendFileSync(
  notesPath,
  " And hello from the trainer and the students!",
  { encoding: "utf-8" }
);
readFile(notesPath, "utf-8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
  
    console.log("From read async", data);
    writeFile(notesPath, "From the async write function", err => {
      console.log("File written");
      appendFile(notesPath, ", and appended async!", "utf-8", err => {
        console.log("don't do this please");
      });
    });
  });

console.log(notesData);
