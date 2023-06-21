import { worker } from "../models/workers.models.js";

export class WorkerService{
    static async getAllWorkers(){
        return worker.find({})
    }
    static async getWorkerByID(workerID){
        const foundWorker = worker.findById(workerID);
        if(!foundWorker) throw new console.error('There is no user with this ID');
        return foundWorker;
    }
    static async createWorker(workerData){
        if (workerData._id) throw new Error("Invalid Data");
        const newWorker = new worker(workerData);
        const response = await newWorker.save();
        return response;
    }
    static async updateWorker(workerID,workerData){
        const worker = await this.getWorkerByID(workerID);
        if (workerData._id) throw new Error("Invalid data");
        Object.assign(worker,workerData);
        const response = await worker.save();
        return response;
    }
    static async deleteWorker(workerID) {
        const response = await worker.findByIdAndDelete(workerID);
        if (!response) throw new Error("There is no user with this id");
        return response;
      }
}