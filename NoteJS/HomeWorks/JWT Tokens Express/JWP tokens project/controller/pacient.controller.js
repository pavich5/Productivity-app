import { pacientModel } from "../modells/pacients.models.js";

export class pacientController{
    static async getAllPacients(req,res){
        try {
            const pacients = await pacientModel.getAllPacients();
            return res.json(pacients);
        } catch (error) {
            console.log(error);
            return res.status(500).json({ msg: error.message });
        }
    }
    static async getPacientByID(req,res){
        try {
            const foundPacient = await pacientModel.getPacientByID(req.params.id);
            return res.json(foundPacient);
        } catch (error) {
            console.log(error);
            return res.status(404).json({ msg: error.message });
        }
    }
    static async createPacient(req, res) {
        try {
          const {
            firstName,
            lastName,
            email,
            password,
            primaryCareDoctor,
            dateOfBirth,
            gender,
            phoneNumber,
          } = req.body;
      
          const newPacient = await pacientModel.createPacient({
            firstName,
            lastName,
            email,
            password,
            primaryCareDoctor,
            dateOfBirth,
            gender,
            phoneNumber,
          });
      
          return res.json(newPacient);
        } catch (error) {
          console.log(error);
          return res.status(404).json({ msg: error.message });
        }
      }

      static async updatePacient(req,res){
        try {
            const updatePacient = await pacientModel.updatePacientInfo(req.params.id,req.body);
            return res.json(updatePacient);
        } catch (error) {
            console.log(error);
          return res.status(404).json({ msg: error.message });
        }
      
      }
    static async deleteAllPacients(req,res){
        try {
            await pacientModel.deleteAllPacients()
            return res.send({msg: `Delete all`})
        } catch (error) {
            console.log(error);
            return res.status(404).json({ msg: error.message });
        }
       
    }
    static async deletePacient(req,res){
        const pacientID = req.params.id;
        await pacientModel.deletePacient(pacientID);
        return res.send({msg: `Pacient with id ${pacientID} is deleted`})
    }

}
  