import { gymModel } from "../models/gymUsers.model.js";

export class gymController {
  static async getAllGymMembers(req, res) {
    try {
      const gymMembers = await gymModel.getAllgymMembers();
      return res.json(gymMembers);
    } catch (error) {
      console.log(error);
      return res.status(400).send({ msg: error.message });
    }
  }
  static async getGymMemberByID(req, res) {
    try {
      const gymMemberID = req.params.id;
      const foundMember = await gymModel.getgymMemberByID(gymMemberID);
      return res.json(foundMember);
    } catch (error) {
      console.log(error);
      return res.status(400).send({ msg: error.message });
    }
  }
  static async createMember(req, res) {
    try {
      const memberData = req.body;
      const createGymMember = await gymModel.createGymMember(memberData);
      return res.status(201).json(createGymMember);
    } catch (error) {
      console.log(error);
      return res.status(400).json({ msg: error.message });
    }
  }
  static async updateMembers(req, res) {
    try {
      const memberID = req.params.id;
      const data = req.body;
      const updatedUser = await gymModel.updatedMembers(memberID, data);
      return res.json(updatedUser);
    } catch (error) {
      console.log(error);
      return res.status(400).json({ msg: error.message });
    }
  }
  static async deleteAll(req, res) {
    try {
      await gymModel.deleteAllMembers();
      return res.send({ msg: `All members are deleted` });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ msg: error.message });
    }
  }
  static async deleteMember(req, res) {
    try {
      const memberID = req.params.id;
      await gymModel.deleteMember(memberID);
      return res.send({ msg: `Member with id ${memberID} is deleted` });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ msg: error.message });
    }
  }
}
