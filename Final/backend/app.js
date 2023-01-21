import express from "express";
import mongoose from "mongoose";
import blogRouter from "./routes/blog-routes";
import router from "./routes/user-routes";
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/user", router);
app.use("/api/blog", blogRouter);

mongoose
  .connect(
    "mongodb+srv://admin:MzRg7CEiyciPXagn@cluster0.exbqbyt.mongodb.net/BlogDb?retryWrites=true&w=majority"
  )
  .then(() => app.listen(8000))
  .then(() => console.log("Connected to Database and Listening on 8000"))
  .catch((err) => console.log(err));

app.listen(5000);
