import mongoose from 'mongoose';

export const connectDb = async() => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDb Connected: ${conn.connection.host}`)
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(1) // process code 1 means exist with failure, o means success
  }
}
