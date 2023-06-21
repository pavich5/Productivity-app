import { FarmersService } from "../services/farmers.services.js";;

export class FarmerController{
    static async getAllFarmers(req,res){
        try {
            const allFarmers = await FarmersService.getAllFarmers()
            return res.json(allFarmers)
        } catch (error) {
            console.log(error);
            res.status(500).send({ msg: error.message }); 
        }
    }
    static async getFarmerByID(req,res){
        try {
            const foundFarmer = await FarmersService.getFarmerByID(req.params.id);
            return res.json(foundFarmer)
        } catch (error) {
            console.log(error);
            res.status(404).send({ msg: error.message });
        }
    }
    static async createFarmer(req,res){
        try {
            const createdFarmer = await FarmersService.createFarmer(req.body);
            return res.json(createdFarmer)
        } catch (error) {
            console.log(error);
            res.status(401).send({ msg: error.message });
        }
    }
    static async updateFarmer(req,res){
        try {
            const updatedFarmer = await FarmersService.updateFarmer(req.params.id,req.body);
            return res.json(updatedFarmer)
        } catch (error) {
            console.log(error);
            res.status(400).send({ msg: error.message });
        }
    }
    static async deleteFarmer(req,res){
        try {
            await FarmersService.deleteFarmer(req.params.id)
            res.sendStatus(204);
        } catch (error) {
            res.status(404).send({ msg: error.message });  
        }
    }
}