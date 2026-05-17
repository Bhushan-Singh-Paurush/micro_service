import dotenv from "dotenv";
import { db } from "./db/dbConnection.js";
import { app } from "./app.js";

dotenv.config({ path: "../.env" });

const port = process.env.PORT || 4500;

(async () => {
  try {
    await db.$connect();

    console.log("Connected to database successfully ✅");

    app.listen(port, () => {
      console.log(`Server is running ✔️  on PORT ${port}`);
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();
