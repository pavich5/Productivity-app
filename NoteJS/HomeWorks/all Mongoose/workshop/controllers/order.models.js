import { Order } from "../models/orders.model.js";
import { OrderServices } from "../services/order.services.js";

export class OrderController{
    static async getAllOrder(req, res) {
        try {
          const filters = req.query;
          const orders = await OrderServices.getAllOrders(filters);
          res.json(orders);
        } catch (error) {
          console.log(error);
          res.status(500).send({ msg: error.message });
        }
      }
    static async getOrderByID(req,res){
        try {
            const foundOrder = await OrderServices.getOrderByID(req.params.id);
            res.json(foundOrder);
        } catch (error) {
            console.log(error);
            res.status(404).send({ msg: error.message });
        }
    }
    static async createOrder(req,res){
        try {
            const createOrder = await OrderServices.createOrder(req.body);
            res.json(createOrder);
        } catch (error) {
            console.log(error);
            res.status(404).send({ msg: error.message });
        }
    }
    static async updateOrder(req,res){
        try {
            const updateOrder = await OrderServices.updateProduct(req.params.id,req.body);
            res.json(updateOrder);
        } catch (error) {
            console.log(error);
            res.status(404).send({ msg: error.message });
        }
    } 
    static async deleteOrder(req, res) {
        try {
          await OrderServices.deleteProduct(req.params.id);
          res.sendStatus(204);
        } catch (error) {
          console.log(error);
          res.status(404).send({ msg: error.message });
        }
      }
}
