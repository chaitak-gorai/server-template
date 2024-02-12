import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import colors from "colors";
import userRoutes from "./routes/userRoutes.js";
import { GenerateResponse } from "./utils/responseCreator.js";

const app = express();
dotenv.config();
app.use(express.json());
//connect to db
// connectDB();

app.get("/", (req, res) => {
  return GenerateResponse(res, 200, {}, "Hello Docker !!");
});
app.use("/user", userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(
    `Server started in ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold
  )
);
