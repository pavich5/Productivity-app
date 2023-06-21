import { DataService } from "../services/data.service.js";
import { pathBuilder } from "../utils/utilis.js";
import { v4 as uuid } from "uuid";
import Joi from "joi";
import bcrypt from "bcryptjs";


const pacientPath = pathBuilder(["..", "data", "pacients.json"]);

const pacientSchema = Joi.object({
  firstName: Joi.string()
    .regex(/^[^\d]+$/)
    .required()
    .min(2)
    .max(20),
  lastName: Joi.string()
    .regex(/^[^\d]+$/)
    .required()
    .min(2)
    .max(20),
  email: Joi.string().email().required(),
  password: Joi.string()
    .min(8)
    .max(30)
    .required()
    .pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])/)
    .message(
      "Password must be between 8 and 30 characters, and contain at least one uppercase letter, one lowercase letter, one digit, and one special character"
    ),
  primaryCareDoctor: Joi.string().required().min(2),
  dateOfBirth: Joi.date().required(),
  gender: Joi.string().valid("Male", "Female", "Other").required(),
  phoneNumber: Joi.string()
    .length(10)
    .pattern(/^[0-9]+$/)
    .required(),
});

class Pacient {
  constructor(
    firstName,
    lastName,
    email,
    password,
    primaryCareDoctor,
    dateOfBirth,
    gender,
    phoneNumber
  ) {
    this.id = uuid();
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.primaryCareDoctor = primaryCareDoctor;
    this.dateOfBirth = dateOfBirth;
    this.gender = gender;
    this.phoneNumber = phoneNumber;
  }
}

export class pacientModel {
  static async savePacients(pacients) {
    await DataService.saveJSONFile(pacientPath, pacients);
  }
  static async getAllPacients() {
    const pacients = await DataService.readJSONFile(pacientPath)
    return pacients;
  }
  static async getPacientByID(pacientID) {
    const pacients = await this.getAllPacients();
    const foundPaciet = pacients.find((pacient) => pacient.id === pacientID);
    return foundPaciet;
  }
  static async createPacient(pacientData) {
    const allPacients = await this.getAllPacients();
    const emailExsist = allPacients.some(
      (pacient) => pacient.email === pacientData.email
    );
    if(emailExsist) throw new Error("email alredy exsist");
    const validation = pacientSchema.validate(pacientData);
    if (validation?.error) throw new Error(validation.error.details[0].message);
    const {
      firstName,
      lastName,
      email,
      password,
      primaryCareDoctor,
      dateOfBirth,
      gender,
      phoneNumber,
    } = pacientData;
    const hashedPassword = await bcrypt.hash(password, 8);
    const newPacient = new Pacient(
      firstName,
      lastName,
      email,
      hashedPassword,
      primaryCareDoctor,
      dateOfBirth,
      gender,
      phoneNumber
    );
    const updatedList = [...allPacients, newPacient];
    await this.savePacients(updatedList);
    const { password: pacientPass, ...pacientWithoutPassword } = pacientData;
    return pacientWithoutPassword;
  }
  static async updatePacientInfo(pacientID, updateInfo) {
    const allPacients = await this.getAllPacients();
    const foundPaciet = await this.getPacientByID(pacientID);
    if (updateInfo.id) throw new Error("fk off mate no id change");
    const updatedPacient = { ...foundPaciet, ...updateInfo };
    const updatedPacients = allPacients.map((pacient) =>
      pacient.id === updatedPacient.id ? updatedPacient : pacient
    );
    await this.savePacients(updatedPacients);
    return updatedPacient;
  }
  
  static async deleteAllPacients() {
    await this.savePacients([]);
  }
  static async deletePacient(pacientID) {
    const allPacients = await this.getAllPacients();
    const pacientDelete = await this.getPacientByID(pacientID);
    const updatedPaceints = allPacients.filter(
      (pacient) => pacient.id !== pacientID
    );
    if (updatedPaceints.length === allPacients.length)
      throw new Error("Pacient not found");

    await this.savePacients(updatedPaceints);
  }
}
