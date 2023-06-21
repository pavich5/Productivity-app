import { DogModel } from "../models/dogs.model.js";

export class DogController {
  static async getAllDogs(req, res) {
    try {
      const filters = req.query;
      const dogs = await DogModel.getAllDogs(filters);
      return res.json(dogs);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ msg: error.message });
    }
  }

  static async getDogByID(req, res) {
    try {
      const dogID = req.params.id;
      const foundDog = await DogModel.getTrainerByID(dogID);
      return res.json(foundDog);
    } catch (error) {
      console.log(error);
      return res.status(404).json({ msg: error.message });
    }
  }
  static async createDog(req, res) {
    try {
      const dogData = req.body;
      const createDog = await DogModel.createDog(dogData);
      return res.status(201).json(createDog);
    } catch (error) {
      console.log(error);
      return res.status(400).json({ msg: error.message });
    }
  }

  static async updateDogData(req, res) {
    try {
      const dogID = req.params.id;
      const updateData = req.body;
      const updatedDog = await DogModel.updateDog(dogID, updateData);
      return res.status(201).json(updatedDog);
    } catch (error) {
      console.log(error);
      return res.status(400).json({ msg: error.message });
    }
  }
  static async deleteAllDogs(req, res) {
    try {
      await DogModel.deleteAllDogs();
      return res.status(400).json({ msg: "Deleted all" });
    } catch (error) {
      console.error(error);
      return res.status(400).json({ msg: error.message });
    }
  }
  

  static async deleteDog(req, res) {
    try {
      const dogID = req.params.id;
      await DogModel.deleteDog(dogID);
      return res
        .status(400)
        .json({ msg: `"trainer with id: ${dogID} is deleted` });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ msg: error.message });
    }
  }
}
