import dotenv from "dotenv";
import db from "./db/dbConnection.js";
dotenv.config({ path: "./.env" });
import { createServer } from "http";
import app from "./app.js";
import { initSocket } from "./utils/socket.js";
import "../src/workers.js"

const server = createServer(app);

const port = process.env.PORT || 4005;

async function startServer() {
  try {
    await db.$connect();

    initSocket(server);

    server.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

startServer();
