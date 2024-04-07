import mongoose from "mongoose";
import { DB_NAME } from '../constants.js';

export const connectDB = async () => {
    try {

        const connectionInctance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`\n MongoDb connected !! DB Host : ${connectionInctance.connection.host}`);

    } catch (error) {
        console.error('Error', error);
        throw error;
    }
}