import path from "node:path";
import { v4 as uuid } from "uuid";
import { fileURLToPath } from "node:url";
import { DataService } from "./services/data.service.js";
import { get } from "node:http";
import { error } from "node:console";
import fs from "fs";
import exp from "node:constants";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dogsPath = path.join(__dirname, "data", "dogs.json");

const saveDogs = async (dogs) => {
  await DataService.saveJSONFile(dogsPath, dogs);
};

// 1. Get all dogs
export const getAllDogs = async () => {
  const dogs = await DataService.readJSONFile(dogsPath);
  return dogs;
};

// 2. Get dogs by id
export const getDogByID = async (dogID) => {
    const allDogs = await getAllDogs();
    const foundDog = allDogs.find((dog) => dog.id === dogID);
    if(!foundDog) throw new error("There is no dog with this id");
    return foundDog;
}
// 3. Create dogs
export const addDog = async (name, breed, age, weight, color, vaccinated) => {
    const newDog = {
      id: uuid(),
      name: name,
      breed: breed,
      age: age,
      weight: weight,
      color: color,
      vaccinated: vaccinated
    };
  
    const allDogs = await getAllDogs();
    const updatedDogs = [...allDogs, newDog];
    saveDogs(updatedDogs);
    return newDog;
  };
  
// 4. Update dogs
export const updateDog = async (dogID, updatedData) => {
  const allDogs = await getAllDogs();
  const dogToUpdate = await getDogByID(dogID);

  const updatedDog = {
    ...dogToUpdate,
    ...updatedData
  };

  const updatedDogs = allDogs.map((dog) => {
    if (dog.id === updatedDog.id) {
      return updatedDog;
    } else {
      return dog;
    }
  });

  saveDogs(updatedDogs);
  return updatedDog;
};

// 5. Delete dogs
export const  deleteDogByID = async (dogID) =>{
    const dogToDelete = await getDogByID(dogID);
    const allDogs = await getAllDogs();
    const updatedDogList = allDogs.filter(dog => dog.id !== dogID);
    if(allDogs.length === updatedDogList.length) throw new error("Dog not found");
    await saveDogs(updatedDogList);

}
// 6. Delete all dogs