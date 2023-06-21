import { User } from "../models/users.models.js";

export class UserService{
    static async getAllUsers(filters) {
        const query = {};
        if (filters?.firstName) {
          query['firstName'] = { $regex: new RegExp(filters.firstName, 'i') };
        }
        if (filters?.lastName) {
          query['lastName'] = { $regex: new RegExp(filters.lastName, 'i') };
        }
        if(filters?.age){
            query.age = { $gte: Number(filters.age) };
        }
        const users = await User.find(query);
        return users;
      }
      
      static async getUserByID(UserID) {
        const foundUser = await User.findById(UserID)
          .populate({
            path: 'orders',
            populate: {
              path: 'products',
              select: 'title description price',
            },
          });
      
        if (!foundUser) {
          throw new Error('There is no user with this id');
        }
      
        return foundUser;
      }
      
    static async createUser(data){
        const newUser = new User(data);
        if (data._id) throw new Error("Invalid Data");
        const response = await newUser.save();
        return response;
    }
    static async updateUser(userID,data){
        const user = await this.getUserByID(userID);
        if (data._id) throw new Error("Invalid data");
        Object.assign(user,data);
        const response = await user.save();
        return response;
    }
    static async deleteUser(userID) {
        const response = await User.findByIdAndDelete(userID);
        if (!response) throw new Error("There is no user with this id");
        return response;
      }
}