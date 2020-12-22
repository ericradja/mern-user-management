import "dotenv-safe/config";
import mongoose from "mongoose";

// Problem with authorization
// const MONGO_URI = `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DBNAME}`;
const MONGO_URI = `mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DBNAME}`;

const dbConnect = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: true,
    });
    console.log(
      `:>> Connected to DB : host: ${process.env.MONGO_HOST}, port: ${process.env.MONGO_PORT}, db: ${process.env.MONGO_DBNAME},`
    );
  } catch (error) {
    console.log("error :>> ", error);
    console.log(`DB connection error : ${error.message}`);
  }
};

export default dbConnect;
