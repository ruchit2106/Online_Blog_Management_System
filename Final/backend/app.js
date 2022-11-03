import express from "express";
import mongoose from "mongoose";
import blogRouter from "./routes/blog-routes";
import R from "./routes/user-routes";

const app = express();
app.use(express.json());
app.use("/api/user",R);
app.use("/api/blog",blogRouter);

mongoose.
    connect('mongodb+srv://admin:MzRg7CEiyciPXagn@cluster0.exbqbyt.mongodb.net/BlogDb?retryWrites=true&w=majority')
    .then(() => app.listen(8000)).
    then(() => 
    console.log("Connected to Database and Listening on 8080"))
    .catch((err) => console.log(err));


app.listen(8080);



//--experimental-modules --es-module-specifier-resolution=node