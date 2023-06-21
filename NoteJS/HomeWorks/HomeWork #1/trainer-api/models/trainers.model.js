import path from "node:path";
import { v4 as uuid } from "uuid";
import { fileURLToPath } from "node:url";
import { DataService } from "../services/data.service.js";
import Joi from "joi";
import bcrypt from "bcryptjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const trainersPath = path.join(__dirname, "..", "data", "trainers.json");

const trainerScheme = Joi.object({
  firstName: Joi.string().min(2).required(),
  lastName: Joi.string().min(2).required(),
  email: Joi.string().email().required(),
  password: Joi.string()
    .min(8)
    .max(30)
    .required()
    .pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])/)
    .message(
      "Password must be between 8 and 30 characters, and contain at least one uppercase letter, one lowercase letter, one digit, and one special character"
    ),
  academy: Joi.array().required().min(2),
  courseFinished: Joi.required(),
});

class Trainer {
  constructor(firstName, lastName, email, password, academy, courseFinished) {
    this.id = uuid();
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.academy = academy;
    this.courseFinished = courseFinished;
  }
}

export class TrainerModel {
  // 1.Save Trainers
  static async saveTrainers(trainers) {
    await DataService.saveJSONFile(trainersPath, trainers);
  }

  // 2.Get all Trainers
  static async getAllTrainers(filters) {
    let trainers = await DataService.readJSONFile(trainersPath);
    if (filters?.author) {
      trainers = trainers.filter(
        (trainer) => filters.author === trainer.author
      );
    }
    if (filters?.firstName) {
      trainers = trainers.sort((a, b) => a.name.localeCompare(b.name));
    }
    if (filters?.isCurrentlyTeaching) {
      trainers = trainers.filter(
        (trainer) =>
          Boolean(trainer.isCurrentlyTeaching) ===
          Boolean(filters.isCurrentlyTeaching)
      );
    }
    return trainers;
  }

  // 3.Get Trainer by ID
  static async getTrainerByID(trainerID) {
    const trainers = await this.getAllTrainers();
    const foundTrainer = trainers.find((trainer) => trainer.id === trainerID);
    if (!foundTrainer) throw new Error("Trainer with this id not exsist");
    return foundTrainer;
  }

  // 4.Create Trainer
  static async createTrainer(trainerData) {
    const trainers = await this.getAllTrainers();
    const emailExists = trainers.some(
      (trainer) => trainer.email === trainerData.email
    );
    if (emailExists) throw new Error("this email alredy exsist");
    const validation = trainerScheme.validate(trainerData);
    if (validation?.error) throw new Error(validation.error.details[0].message);
    const { firstName, lastName, email, password, courseFinished, academy } =
      trainerData;
    const hashedPassword = await bcrypt.hash(password, 8);
    const newTrainer = new Trainer(
      firstName,
      lastName,
      email,
      hashedPassword,
      courseFinished,
      academy
    );
    const updatedTrainers = [...trainers, newTrainer];
    await this.saveTrainers(updatedTrainers);

    const { password: trainerPassword, ...trainerWithoutPassword } = newTrainer;
    return trainerWithoutPassword;
  }

  // 5.Update Trainer Info
  static async updateTrainer(trainerID, updateData) {
    const trainers = await this.getAllTrainers();
    const foundTrainer = await this.getTrainerByID(trainerID);

    if (updateData.id) throw new Error("Invalid updates");
    const updatedTrainer = { ...foundTrainer, ...updateData };
    const updatedTrainers = trainers.map((trainer) =>
      trainer.id === updatedTrainer.id ? updatedTrainer : trainer
    );
    await this.saveTrainers(updatedTrainers);
    return updatedTrainer;
  }

  // 6.Delete all info
  static async deleteAllTrainers() {
    await this.saveTrainers([]);
  }

  // 7. Delete Trainer
  static async deleteTrainer(trainerID) {
    const trainers = await this.getAllTrainers();
    const foundTrainer = await this.getTrainerByID(trainerID);

    const updateList = trainers.filter(
      (trainer) => trainer.id !== foundTrainer.id
    );
    await this.saveTrainers(updateList);
  }
}
