import { farmers } from "../models/farmers.models.js";

export class FarmersService {
  static async getAllFarmers() {
    try {
      const allFarmers = await farmers.find({});
      return allFarmers;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  static async getFarmerByID(farmerID) {
    const foundFarmer = await farmers.findById(farmerID);
    if (!foundFarmer) throw new Error("there is no farmer with this id");
    return foundFarmer;
  }

  static async createFarmer(farmerData) {
    if (farmerData._id) throw new Error("Invalid Data");
    const newFarmer = new farmers(farmerData);
    const createdFarmer = await newFarmer.save();
    return createdFarmer;
  }

  static async updateFarmer(farmerID,farmerData){
    const foundFarmer = await this.getFarmerByID(farmerID);
    if (farmerData._id) throw new Error("Invalid Data");
    Object.assign(foundFarmer,farmerData);
    const response = await foundFarmer.save();
    return response;
  }
  static async deleteFarmer(farmerID){
    const response = await farmers.findByIdAndDelete(farmerID);
    if(!response) throw new Error("There is no user with this id")
}
}
