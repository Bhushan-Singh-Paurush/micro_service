import dotenv from "dotenv";
import dbConnection from "./db/dbConnection.js";
import app from "./app.js";
import { redis } from "./redis.js";
import "./workers.js";
import { User } from "./models/user.model.js";
import createUser from "./utils/createAdmin.js";
dotenv.config({ path: "./.env" });

const port = process.env.PORT || 5000;

async function startServer() {
  try {
    
    dbConnection();

    await redis.flushall();

    const admin = await User.findOne({ email: process.env.ADMIN_EMAIL });

    if (!admin) {
      await createUser();
      console.log("Admin created successfully ☑️");
    } else {
      console.log("Admin is already present ☑️");
    }

    app.listen(port, () => {
      console.log(`server is running on port ${port}`);
    });


  } catch (error) {
    console.error(error)
    process.exit(1);
  }
}

startServer()


