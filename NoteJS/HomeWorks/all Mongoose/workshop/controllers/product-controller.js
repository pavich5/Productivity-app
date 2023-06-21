import { productServices } from "../services/product-services.js";

export class productController {
  static async getAllProducts(req, res) {
    try {
      const allProduct = await productServices.getAllProducts(req.query);
      res.json(allProduct);
    } catch (error) {
      console.log(error);
      res.status(500).send({ msg: error.message });
    }
  }
  
    static async getProductByID(req,res){
        try {
            const foundProduct = await productServices.getProductByID(req.params.id);
            res.json(foundProduct);
        } catch (error) {
            console.log(error);
            res.status(403).send({ msg: error.message });
        }
    }
    static async createProduct(req,res){
        try {
            const newProduct = await productServices.createProduct(req.body);
            res.json(newProduct);
        } catch (error) {
            console.log(error);
            res.status(403).send({ msg: error.message });
        }
    }
    static async updateProduct(req,res){
        try {
            const updateProduct = await productServices.updateProduct(req.params.id,req.body);
            res.json(updateProduct);
        } catch (error) {
            console.log(error);
            res.status(404).send({ msg: error.message });
        }
    } 
    static async deleteProduct(req, res) {
        try {
          await productServices.deleteProduct(req.params.id);
          res.sendStatus(204);
        } catch (error) {
          console.log(error);
          res.status(404).send({ msg: error.message });
        }
      }
}