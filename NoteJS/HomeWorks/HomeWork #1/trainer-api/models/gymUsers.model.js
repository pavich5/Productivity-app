import path from "node:path";
import { v4 as uuid } from "uuid";
import { fileURLToPath } from "node:url";
import { DataService } from "../services/data.service.js";
import Joi from "joi";
import bcrypt from "bcryptjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const gymMembersPath = path.join(__dirname, "..", "data", "gymMembers.json");

const gymScheme = Joi.object({
  firstName: Joi.string()
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
  age: Joi.number().integer().min(0).max(99).required(),
  weight: Joi.number().precision(2).min(30).max(150).required(),
  gender: Joi.string().valid("male", "female", "other").required(),
  startedMembership: Joi.date().required(),
  gymPackage: Joi.string().valid("Basic", "Premium", "All exlusive").required(),
});

class gymMember {
  constructor(
    firstName,
    lastName,
    email,
    password,
    startedMembership,
    gymPackage,
    age,
    weight,
    gender
  ) {
    this.id = uuid();
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.startedMembership = startedMembership;
    this.gymPackage = gymPackage;
    this.age = age;
    this.weight = weight;
    this.gender = gender;
  }
}

export class gymModel {
  static async saveMembers(gymMembers) {
    await DataService.saveJSONFile(gymMembersPath, gymMembers);
  }
  static async getAllgymMembers() {
    let gymMembers = DataService.readJSONFile(gymMembersPath);
    return gymMembers;
  }
  static async getgymMemberByID(gymMemberID) {
    const gymMembers = await this.getAllgymMembers();
    const foundMember = gymMembers.find(
      (gymMember) => gymMember.id === gymMemberID
    );
    return foundMember;
  }
  static async createGymMember(data) {
    const members = await this.getAllgymMembers();
    const emailExists = members.some((member) => member.email === data.email);
    const validation = gymScheme.validate(data);
    if (validation?.error) throw new Error(validation.error.details[0].message);
    if (emailExists) throw new Error("this email alredy exsist");
    const {
      firstName,
      lastName,
      email,
      password,
      startedMembership,
      gymPackage,
      age,
      weight,
      gender,
    } = data;
    const hashedPassword = await bcrypt.hash(password, 8);
    const newMember = new gymMember(
      firstName,
      lastName,
      email,
      hashedPassword,
      startedMembership,
      gymPackage,
      age,
      weight,
      gender
    );
    const updatedMembers = [...members, newMember];
    await this.saveMembers(updatedMembers);
    const { password: memberPassword, ...withoutMemberPassword } = newMember;

    return withoutMemberPassword;
  }

  static async updatedMembers(memberID, updateData) {
    const members = await this.getAllgymMembers();
    const foundMember = await this.getgymMemberByID(memberID);
    if (updateData.id) throw new Error("Invalid updates");
    if (updateData.password) {
      let password = updateData.password;
      password = await bcrypt.hash(password, 8);
    }
    const updatedMember = { ...foundMember, ...updateData };
    const updatedMembers = members.map((member) =>
      member.id === updatedMember.id ? updatedMember : member
    );

    await this.saveMembers(updatedMembers);
    return updatedMember;
  }

  // 6.Delete all info
  static async deleteAllMembers() {
    await this.saveMembers([]);
  }

  // 7. Delete members
  static async deleteMember(memberID) {
    const members = await this.getAllgymMembers();
    const foundMember = await this.getgymMemberByID(memberID);
    const updateList = members.filter((member) => member.id !== foundMember.id);
    await this.saveMembers(updateList);
  }
}
