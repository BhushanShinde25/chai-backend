import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connnectionInstance = await mongoose.connect(
      `${process.env.MONGOBB_URI}/${DB_NAME}`
    );
    console.log("\n connection has made!!! DB HOST: ", connnectionInstance);
  } catch (error) {
    console.log("ERROR in connectBB : ", error);
    process.exit();
  }
};

export default connectDB;
