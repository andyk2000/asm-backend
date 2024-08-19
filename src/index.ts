import express, { Express, Request, Response, Application } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const app: Application = express();
const port = process.env.PORT || 8000;
const dbName = process.env.DATABASE_NAME || "ADMIN";
const dbPassword = process.env.DATABASE_PASSWORD || "*****";

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Express & TypeScript Server");
});

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});

mongoose
  .connect(
    `mongodb+srv://${dbName}:${dbPassword}@cluster0.sazjv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`,
  )
  .then(() => {
    console.log("connected to database");
  })
  .catch(() => {
    console.log("connection failed");
  });
