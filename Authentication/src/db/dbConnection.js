import mongoose from "mongoose";

async function dbConnection() {
  try {
    await mongoose.connect(process.env.DATABASE_URL);

    console.log("Connected to database successfully ☑️");
  } catch (error) {
    throw new Error("Failed to connect to mongodb database ",error);
    
  }
}

export default dbConnection;
