import dotenv from "dotenv";
import dbConnection from "./db/dbConnection.js";
import app from "./app.js";
import { redis } from "./redis.js";
import "./workers.js";
dotenv.config({ path: "./.env" });

const port = process.env.PORT || 5000;

dbConnection()
  .then(() => {
    app.listen(port, () => {
      console.log(`server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
