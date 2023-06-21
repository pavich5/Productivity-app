import { TrainerModel } from "../models/trainers.model.js";

export class TrainerController {
  static async getAllTrainers(req, res) {
    try {
      const filters = req.query;
      const trainers = await TrainerModel.getAllTrainers(filters);
      return res.json(trainers);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ msg: error.message });
    }
  }

  static async getTrainerByID(req, res) {
    try {
      const trainerID = req.params.id;
      const foundTrainer = await TrainerModel.getTrainerByID(trainerID);
      return res.json(foundTrainer);
    } catch (error) {
      console.log(error);
      return res.status(404).json({ msg: error.message });
    }
  }
  static async createTrainer(req, res) {
    try {
      const trainerData = req.body;
      const createStudent = await TrainerModel.createTrainer(trainerData);
      return res.status(201).json(createStudent);
    } catch (error) {
      console.log(error);
      return res.status(400).json({ msg: error.message });
    }
  }

  static async updateTrainerData(req, res) {
    try {
      const trainerID = req.params.id;
      const updateData = req.body;
      const updatedTrainer = await TrainerModel.updateTrainer(
        trainerID,
        updateData
      );
      return res.status(201).json(updatedTrainer);
    } catch (error) {
      console.log(error);
      return res.status(400).json({ msg: error.message });
    }
  }
  static async deleteAllTrainers(req, res) {
    try {
      await TrainerModel.deleteAllTrainers();
      return res.status(400).json({ msg: "Deleted all" });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ msg: error.message });
    }
  }

  static async deleteTrainer(req, res) {
    try {
      const trainerID = req.params.id;
      await TrainerModel.deleteTrainer(trainerID);
      return res
        .status(400)
        .json({ msg: `"trainer with id: ${trainerID} is deleted` });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ msg: error.message });
    }
  }
}
