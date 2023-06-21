import { Product } from "../models/product.models.js";

export class productServices {
  static async getAllProducts(filters) {
    const query = {};

    if (filters?.stock) {query.stock = { $gt: 0 };}

    if (filters?.rating) {query.rating = { $gte: Number(filters.rating) };}

    if (filters?.title) query.title = { $regex: new RegExp(filters.title, "i") };
    
    if (filters?.minPrice && filters?.maxPrice) {
      query.price = { $gte: filters.minPrice, $lte: filters.maxPrice };
    } else if (filters?.minPrice) {
      query.price = { $gte: filters.minPrice };
    } else if (filters?.maxPrice) {
      query.price = { $lte: filters.maxPrice };
    }

    const products = await Product.find(query);
    return products;
  }

  static async getProductByID(productID) {
    console.log("getproducid");
    const foundProduct = Product.findById(productID);
    if (!foundProduct) throw new Error("There is no product with this id");
    return foundProduct;
  }

  static async createProduct(data) {
    const newProduct = new Product(data);
    if (data._id) throw new Error("Invalid Data");
    console.log(newProduct);
    const response = await newProduct.save();
    return response;
  }

  static async updateProduct(produtID, data) {
    const product = await this.getProductByID(produtID);
    if (data._id) throw new Error("Invalid data");
    Object.assign(product, data);
    const response = await product.save();
    return response;
  }

  static async deleteProduct(productID) {
    const response = await Product.findByIdAndDelete(productID);
    if (!response) throw new Error("There is no product with this id");
    return response;
  }
}
