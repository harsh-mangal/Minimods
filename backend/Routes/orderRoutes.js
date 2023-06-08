import express from "express";
import User from "../Models/UserModel.js";
import { generateToken } from "../utils.js";
import expressAsyncHandler from "express-async-handler";
import { isAuth } from "../utils.js";
import Order from "../Models/OrderModel.js";
const orderRouter = express.Router();
orderRouter.post(
  "/",
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const newOrder = new Order({
      orderItems: req.body.orderItems.map((x) => ({
        ...x,
        product: x._id,
      })),
      shippingAddress: req.body.shippingAddress,
      paymentMethod: req.body.paymentMethod,
      itemsPrice: req.body.itemsPrice,
      shippingPrice: req.body.shippingPrice,
      taxPrice: req.body.taxPrice,
      totalPrice: req.body.totalPrice,
      user: req.user._id,
    });
    const order = await newOrder.save();
    res.status(201).send({ message: "New order created", order });
  })
);
orderRouter.get('/mine', isAuth, expressAsyncHandler(async (req, res) => {
    const orders = await Order.find({ user: req.user._id });
    res.send(orders);
    console.log(orders);
  }));
  

export default orderRouter;
