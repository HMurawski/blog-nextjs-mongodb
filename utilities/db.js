import mongoose from "mongoose"
let isConnected = false

export const connectToDB = async () => {
    mongoose.set('strictQuery', true)

    if (isConnected) {
        console.log(`using existing db connection`);
        return;
    }

    const db = await mongoose.connect(process.env.MONGODB_URI, {
        // dbName: process.env.MONGODB_DB,
        useNewUrlParser: true,
        useUnifiedTopology: true,

    })

    isConnected = true
    console.log(`using new db connection`);
}