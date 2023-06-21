import { DataService } from "../services/data.service.js";
import { pathBuilder } from "../utils/utilis.js";
import { v4 as uuid } from "uuid";
import Joi from "joi";
import bcrypt from "bcryptjs";

const usersPath = pathBuilder(["..", "data", "users.json"]);

const userSchema = Joi.object({
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
    role: Joi.string().required().valid("Admin", "admin", "user", "User"),
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
    static async getAllUsers(){
        return DataService.readJSONFile(usersPath); 
    }
    static async saveUsers(users){
        return DataService.saveJSONFile(usersPath,users);
    }
    static async getUserByID(userId){
        const users = await this.getAllUsers();
        const foundUser = users.find((user)=> user.id === userId);
        if(!foundUser) throw new Error("there is no user with this ID");
        return foundUser;
    }
    static async registerUser(userData){
        const users = await this.getAllUsers();
        const userExsist = users.some((user)=> user.email === userData.email);
        if(userExsist) throw new Error("Email alredy exsist");
        const validation = userSchema.validate(userData);
        if (validation?.error) throw new Error(validation.error.details[0].message);
        const {firstName, lastName, email, password, role} = userData;
        const hashedPassword = await bcrypt.hash(password, 8);
        const newUser = new User(firstName, lastName, email, hashedPassword, role);
        const updatedUsers = [...users,newUser];
        await this.saveUsers(updatedUsers);
        const {password:userPW,...withoutPW} = newUser;
        return withoutPW
    }
    static async loginUser(credentials){
        const users = await this.getAllUsers();
        const {email,password} = credentials;
        const foundUser = users.find((user)=> user.email === email);
        if(!foundUser) throw new Error("Invalid credentials");
        const passwordCheck = await bcrypt.compare(password, foundUser.password);
        if(!passwordCheck) throw new Error("Invalid credentials");
        const { password: userPassword, ...userWithoutPassword } = foundUser;
        return userWithoutPassword;
    }
    static async saveRefreshToken(userId, refreshToken) {
      const users = await this.getAllUsers();
  
      const updatedUsers = users.map(user => {
        if (user.id === userId) {
          user.refreshToken = refreshToken;
          return user;
        }
        return user;
      });
      await this.saveUsers(updatedUsers);
    }
  }