import express from "express";
import path from "path";
import bodyParser from "body-parser";
import { MongoClient } from "mongodb";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

dotenv.config();

export const app = express();

app.use(bodyParser.json());
app.use(cookieParser(process.env.COOKIE_SECRET));

const mongoClient = new MongoClient(process.env.MONGODB_URL);
mongoClient.connect().then(async () => {
  console.log("Connected to mongodb");
});

app.use(express.static(path.resolve("../client/dist")));
app.use((req, res, next) => {
  if (req.method === "GET" && !req.path.startsWith("/api/")) {
    return res.sendFile(path.resolve("../client/dist/index.html"));
  } else {
    next();
  }
});
