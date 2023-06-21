import { DataService } from "../services/data.service.js";
import { pathBuilder } from "../utils/utils.js";
import { v4 as uuid } from "uuid";
import Joi from "joi";
import bcrypt from "bcryptjs";

const userSchema = Joi.object({
  firstName: Joi.string().min(2).required(),
  lastName: Joi.string().min(2).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(8).max(30).required(),
  role: Joi.string().required().valid("Admin", "admin", "User", "user", "GOD"),
  // GOD = jas koa s logirm :D
});

class User {
  constructor(firstName, lastName, email, password, role) {
    this.id = uuid();
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.role = role;
  }
}

const usersPath = pathBuilder(["..", "data", "users.json"]);

export class AuthModel {
  static async getAllUsers() {
    return DataService.readJSONFile(usersPath);
  }
  static async saveUsers(users) {
    await DataService.saveJSONFile(usersPath, users);
  }
  //   1. Register user
  static async registerUser(userData) {
    const users = await this.getAllUsers();

    const userExists = users.some((user) => user.email === userData.email);

    if (userExists) throw new Error("Email already exists");

    const validation = userSchema.validate(userData);

    if (validation?.error) throw new Error(validation.error.details[0].message);

    const { firstName, lastName, email, password, role } = userData;

    const hashedPassword = await bcrypt.hash(password, 8);

    const newUser = new User(firstName, lastName, email, hashedPassword, role);

    const updatedUsers = [...users, newUser];

    await this.saveUsers(updatedUsers);

    const { password: userPassword, ...userWithoutPassword } = newUser;
    return userWithoutPassword;
  }
  //   2. Login user
  static async loginUser(credentials) {
    const { email, password } = credentials;

    const users = await this.getAllUsers();

    const foundUser = users.find((user) => user.email === email);

    if (!foundUser) throw new Error("Invalid Credentials");

    const isPasswordValid = await bcrypt.compare(password, foundUser.password);

    if (!isPasswordValid) throw new Error("Invalid Credentials");

    const { password: userPassword, ...userWithoutPassword } = foundUser;
    return userWithoutPassword;
  }
}
