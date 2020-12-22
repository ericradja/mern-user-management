import "dotenv-safe/config";
import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import dbConnect from "./database/dbConnect";
import { userRoutes } from "./routes";

const main = async () => {
  const PORT = process.env.API_PORT ? parseInt(process.env.API_PORT, 10) : 5000;

  const app = express();

  app.use(cors());

  // parse application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: false }));

  // parse application/json
  app.use(bodyParser.json());

  app.use("/api", userRoutes);

  dbConnect().then(() => {
    app.listen(PORT, () => {
      console.log(`Server is ready on ${PORT}`);
    });
  });
};

main().catch((error) => {
  console.log("error :>> ", error);
});
