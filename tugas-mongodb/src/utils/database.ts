import mongoose from "mongoose";
import { DATABASE_URL, DATABASE_NAME } from "./env";

const connect = async () => {
  try {
    console.log("Trying connect to database");

    await mongoose.connect(DATABASE_URL, {
		  dbName: DATABASE_NAME,
    });

    console.log("Database Connected");
    return "Database connected";
  } catch (error) {
    console.error(error);
    return error;
  }
};

export default connect;
