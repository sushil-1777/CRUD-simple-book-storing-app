import express from "express";
import mongoose from "mongoose";
import booksRoute from "./routes/booksRoute.js";
import cors from "cors";
import { configDotenv } from "dotenv";
const app = express();

app.use(express.json());
configDotenv();

app.use(cors());

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("Welcome To MERN Stack Tutorial");
});

app.use("/books", booksRoute); 
 
mongoose 
  .connect(process.env.mongoDBURL) 
  .then(() => { 
    console.log("Database is conneced successfully");
    app.listen(process.env.PORT, () => {
      console.log(`App is listening to port: ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
