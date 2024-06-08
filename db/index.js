import mongoose from "mongoose";

const connectToMongoDB = async () => {
    try{
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("connected to MongoDB")
    }catch(e){
        console.log("Error connecting to MongoDb", e)
    }
}
export default connectToMongoDB