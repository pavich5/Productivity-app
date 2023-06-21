import { DataService } from "../services/data.service.js";
import { pathBuilder } from "../utils/utils.js";
import { v4 as uuid } from "uuid";
import Joi from "joi";
import bcrypt from "bcryptjs";

const usersPath = pathBuilder(["..", "data", "users.json"]);

const userSchema = Joi.object({
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
  role: Joi.string().required().valid("Doctor", "doctor", "pacient", "Pacient"),
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

export class AuthModel {
  static async getAllUsers() {
    return DataService.readJSONFile(usersPath);
  }
  static async saveUsers(users) {
    return DataService.saveJSONFile(usersPath, users);
  }
  static async getUserByID(userID) {
    const users = await this.getAllUsers();
    const foundUser = users.find((user) => user.id === userID);
    if(!foundUser) throw new Error("No user found")
    return foundUser;
  }
  static async registerUser(userData) {
    const users = await this.getAllUsers();
    const userExist = users.some((user) => user.email === userData.email);
    if (userExist) throw new Error("This email alredy exsist");
    const validation = userSchema.validate(userData);
    if (validation?.error) throw new Error(validation.error.details[0].message);
    const { firstName, lastName, email, password, role } = userData;
    const hashedPassword = await bcrypt.hash(password, 8);
    const newUser = new User(firstName, lastName, email, hashedPassword, role);
    const updatedUsers = [...users, newUser];
    await this.saveUsers(updatedUsers);
    const { password: userPass, ...withoutPassword } = newUser;
    return withoutPassword;
  }
  static async loginUser(credentials) {
    const { email, password } = credentials;
    const users = await this.getAllUsers();
    const foundUser = users.find((user) => user.email === email);
    if (!foundUser) throw new Error("invalid Credentials");
    const passwordCheck = await bcrypt.compare(password, foundUser.password);
    if (!passwordCheck) throw new Error("Invalid Credentials");
    const { password: userPassword, ...userWithoutPassword } = foundUser;
    return userWithoutPassword;
  }

    static async saveRefreshToken(userId, refreshtoken) {
      const users = await this.getAllUsers();
  
      const updatedUsers = users.map(user => {
        if (user.id === userId) {
          user.refreshToken = refreshtoken;
          return user;
        }
        return user;
      });
  
      await this.saveUsers(updatedUsers);
    }
}
