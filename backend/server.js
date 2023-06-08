import data from "./data.js";
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import seedRouter from "./Routes/seedRoutes.js";
import productRouter from "./Routes/productRoutes.js";
import userRouter from "./Routes/userRoutes.js";
import orderRouter from "./Routes/orderRoutes.js";
// const express = require("express");

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected to Mongo");
  })
  .catch((err) => {
    console.log("Error connecting to Mongo");
  });

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use("/api/seed", seedRouter);
app.use("/api/products", productRouter);
app.use("/api/users", userRouter);
app.use("/api/orders", orderRouter);

app.use((err, req, res, next) => {
  res.status(500).send({message : err.message});
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("listening on port " + port);
});
