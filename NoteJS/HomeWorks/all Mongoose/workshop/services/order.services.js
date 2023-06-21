import { Order } from "../models/orders.model.js";

export class OrderServices{
  static async getAllOrders(filters) {
    const query = {};
    if (filters?.user?.firstName) {
      query['user.firstName'] = { $regex: new RegExp(filters.user.firstName, 'i') };
    }
    if (filters?.user?.lastName) {
      query['user.lastName'] = { $regex: new RegExp(filters.user.lastName, 'i') };
    }
    const orders = await Order.find(query);
    return orders;
  }
  
  
    static async getOrderByID(orderID){
        const foundOrder = Order.findById(orderID).populate("products").populate("user");
        if(!foundOrder) throw new Error("there is no order with this id");
        return foundOrder
    }
    static async createOrder(data){
        const newOrder = new Order(data);
        if (data._id) throw new Error("Invalid Data");
        const response = await newOrder.save();
        return response
    }
    static async updateProduct(orderID,data){
        const order = await this.getOrderByID(orderID);
        if (data._id) throw new Error("Invalid data");
        Object.assign(order,data);
        const response = await Order.save();
        return response;
    }
    static async deleteProduct(orderID) {
        const response = await Order.findByIdAndDelete(orderID);
        if (!response) throw new Error("There is no order with this id");
        return response;
      }
}