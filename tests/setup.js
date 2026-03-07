import dotenv from "dotenv";
import mongoose from "mongoose";
import app from "../src/app.js";

dotenv.config({ path: ".env.test" });

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URI);
  const collections = mongoose.connection.collections;
  for (const key in collections) {
    await collections[key].deleteMany({});
  }
});

afterAll(async () => {
  await mongoose.connection.close();
});

export default app;
