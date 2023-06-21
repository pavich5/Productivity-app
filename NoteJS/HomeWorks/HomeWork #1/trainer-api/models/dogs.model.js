import path from "node:path";
import { v4 as uuid } from "uuid";
import { fileURLToPath } from "node:url";
import { DataService } from "../services/data.service.js";
import Joi from "joi";
import bcrypt from "bcryptjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dogsPath = path.join(__dirname, "..", "data", "dogs.json");

const dogScheme = Joi.object({
  fistName: Joi.string()
    .regex(/^[^\d]+$/)
    .required()
    .min(2)
    .max(20),
  lastName: Joi.string()
    .regex(/^[^\d]+$/)
    .min(2)
    .max(20)
    .required(),
  email: Joi.string().email().required(),
  password: Joi.string()
    .min(8)
    .max(30)
    .required()
    .pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])/)
    .message(
      "Password must be between 8 and 30 characters, and contain at least one uppercase letter, one lowercase letter, one digit, and one special character"
    ),
  breed: Joi.string()
    .regex(/^[^\d]+$/)
    .min(2)
    .max(20)
    .required(),
  age: Joi.number().integer().min(0).max(99).required(),
  weight: Joi.number().precision(2).min(30).max(150).required(),
  gender: Joi.string().valid("male", "female", "other"),
});

class Dog {
  constructor(fistName, lastName, email, password, breed, age, weight, gender) {
    this.id = uuid();
    this.fistName = fistName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.breed = breed;
    this.age = age;
    this.weight = weight;
    this.gender = gender;
  }
}
export class DogModel {
  // 1.Save dogs
  static async saveDogs(dogs) {
    await DataService.saveJSONFile(dogsPath, dogs);
  }

  // 2.Get all Dogs
  static async getAllDogs(filters) {
    let dogs = await DataService.readJSONFile(dogsPath);
    if (filters?.name) {
      dogs = dogs.sort((a, b) => a.name.localeCompare(b.name));
    }
    return dogs;
  }

  // 3.Get dog by ID
  static async getDogByID(dogID) {
    const dogs = await this.getAllDogs();
    const foundDog = dogs.find((dog) => dog.id === dogID);
    if (!foundDog) throw new Error("Dog with this id not exsist");
    return foundDog;
  }

  // 4.Create Dog
  static async createDog(dogData) {
    const dogs = await this.getAllDogs();
    const emailExists = dogs.some((dog) => dog.email === dogData.email);
    const validation = dogScheme.validate(dogData);
    if (validation?.error) throw new Error(validation.error.details[0].message);
    if (emailExists) throw new Error("this email alredy exsist");
    const { fistName, lastName, email, password, breed, age, weight, gender } =
      dogData;
    const hashedPassword = await bcrypt.hash(password, 8);
    const newDog = new Dog(
      fistName,
      lastName,
      email,
      hashedPassword,
      breed,
      age,
      weight,
      gender
    );
    const updatedDogs = [...dogs, newDog];
    await this.saveDogs(updatedDogs);
    const { password: dogPassword, ...withoutDogPassword } = newDog;

    return withoutDogPassword;
  }

  // 5.Update Dog Info
  static async updateDog(dogID, updateData) {
    const dogs = await this.getAllDogs();
    const foundDog = await this.getDogByID(dogID);

    if (updateData.id) throw new Error("Invalid updates");
    const updatedDog = { ...foundDog, ...updateData };
    const updatedDogs = dogs.map((dog) =>
      dog.id === updatedDog.id ? updatedDog : dog
    );
    await this.saveDogs(updatedDogs);
    return updatedDog;
  }

  // 6.Delete all info
  static async deleteAllDogs() {
    await this.saveDogs([]);
  }

  // 7. Delete dog
  static async deleteDog(dogID) {
    const dogs = await this.getAllDogs();
    const foundDog = await this.getDogByID(dogID);
    const updateList = dogs.filter((dog) => dog.id !== foundDog.id);
    await this.saveDogs(updateList);
  }
}
