// require("dotenv").config({path: './env'});

import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const connectDB = async () => {
    try {
        // console.log(`${process.env.MONGODB_URI}/${DB_NAME}`)
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`MongoDb connected !! \nDB:Host: ${connectionInstance.connection.host}`);
    }
    catch (error) {
        console.error("MongoDb connection error", error);
        process.exit(1);

    }
}

export default connectDB;