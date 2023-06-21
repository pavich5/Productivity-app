import { dataSource } from "../app.data-source";
import { UpdateUsersEntity } from "../entites/update-user.entity";
import { UsersEntity } from "../entites/users.entity";
import * as bcrypt from "bcryptjs";

export class AuthModel {
  static async getAllUsers() {
    const usersRepo = dataSource.getRepository(UsersEntity);
    const allUsers = await usersRepo.find({});
    console.log(allUsers);
    return allUsers;
  }
  static async getUserById(userId) {
    const usersRepo = dataSource.getRepository(UsersEntity);
    const foundUser = usersRepo.findOne({
      where: {
        id: userId,
      },
    });
    if (!foundUser) throw new Error("user not found");
    return foundUser;
  }
  static async createUser(userData: UsersEntity) {
    const usersRepo = dataSource.getRepository(UsersEntity);
    const hashedPassword = await bcrypt.hash(userData.password, 8);
    userData.password = hashedPassword;
    const newUser = await usersRepo.insert(userData);
    return newUser;
  }

  static async updateUser(userData: UpdateUsersEntity, userId) {
    const usersRepo = dataSource.getRepository(UsersEntity);
    const foundUser = await this.getUserById(userId);
    Object.assign(foundUser, userData);
    usersRepo.save(foundUser);
    return foundUser;
  }

  static async deleteUser(userId) {
    const usersRepo = dataSource.getRepository(UsersEntity);
    const foundUser = await this.getUserById(userId);
    usersRepo.remove(foundUser);
  }

  static async loginUser(credentials) {
    const { email, password } = credentials;
    const usersRepo = dataSource.getRepository(UsersEntity);
    const foundUser = await usersRepo.findOne({
      where: {
        email: email,
      },
    });
    if (!foundUser) throw new Error("Invalid credentials");
    const isPasswprdValid = await bcrypt.compare(password, foundUser.password);
    if (!isPasswprdValid) throw new Error("Invalid credentials");
    return foundUser;
  }

  static async saveRefreshToken(userId: number, refreshToken: string) {
    const usersRepo = dataSource.getRepository(UsersEntity);
    const foundUser = await this.getUserById(userId);

    if (foundUser.id === userId) {
      foundUser.refreshTokens = refreshToken;
    }
    await usersRepo.save(foundUser);
  }

  static async deleteRefreshToken(userId: number) {
    const usersRepo = dataSource.getRepository(UsersEntity);
    const user = await usersRepo.findOne({
      where: {
        id: userId,
      },
    });

    if (user) {
      user.refreshTokens = null;
      await usersRepo.save(user);
    }
  }
}
