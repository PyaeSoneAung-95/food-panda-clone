import express from "express";
import cors from "cors";
import dotEnv from "dotenv";
import mongoose from "mongoose";
import employeeRoute from "./routes/employeeRoute.js";
import restaurantRoute from "./routes/restaurantRoute.js";

const app = express();

//middlewares
app.use(cors());
app.use(express.json());

dotEnv.config();

const db_url = process.env.DB_URL;

// mongoose db connection
mongoose
  .connect(db_url)
  .then(() => {
    console.log("DB connected...");
    app.listen(8000, () => console.log("Server is running on port 8000..."));
  })
  .catch((error) => console.log("DB connection error = ", error));

//api routes
app.use("/api/employee", employeeRoute);
app.use("/api/restaurant", restaurantRoute);
