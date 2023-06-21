import { worker } from "../models/workers.models.js";
import { WorkerService } from "../services/workers.services.js";

export class WorkersController{
    static async getAllWorkers(req,res){
        try {
            const allWorkers = await WorkerService.getAllWorkers();
            res.json(allWorkers);
        } catch (error) {
            console.log(error);
            res.status(500).send({ msg: error.message });
        }
    }
    static async getWorkerById(req,res){
        try {
            const fooundWorker = await WorkerService.getWorkerByID(req.params.id);
            res.json(fooundWorker);
        } catch (error) {
            console.log(error);
            res.status(404).send({ msg: error.message });
        }
    }
    static async createWorker(req,res){
        try {
            const createWorker = await WorkerService.createWorker(req.body);
            res.json(createWorker);
        } catch (error) {
            console.log(error);
            res.status(404).send({ msg: error.message });
        }
    }
    static async updateWoker(req,res){
        try {
            const updatedWorker = await WorkerService.updateWorker(req.params.id,req.body);
            res.json(updatedWorker);
        } catch (error) {
            console.log(error);
            res.status(404).send({ msg: error.message });
        }
    } 
    static async deleteWorker(req, res) {
        try {
          await WorkerService.deleteWorker(req.params.id);
          res.sendStatus(204);
        } catch (error) {
          console.log(error);
          res.status(404).send({ msg: error.message });
        }
      }
}
