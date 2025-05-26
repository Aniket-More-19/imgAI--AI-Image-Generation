import express from "express";
import { connectTOMongoDB } from "./config/db";
import "./config/cloudinary";
import imageRoutes from "./routes/imageRoutes";
const app = express();
const port = 3000;

app.use(express.json());

app.use((req, res, next) => {
  //allow access from every, elminate CORS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.removeHeader("x-powered-by");
  //set the allowed HTTP methods to be requested
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  //headers clients can use in their requests
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  //allow request to continue and be handled by routes
  next();
});

app.get("/", (_req, res) => {
  res.send("Hello world from backend!");
});

app.use("/images", imageRoutes);

connectTOMongoDB().then(() => {
  app.listen(port, () => {
    console.log(`Express server listening to port ${port}`);
  });
});
