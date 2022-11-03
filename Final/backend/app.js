import express from "express";
import mongoose from "mongoose";
import R from "./routes/user-routes";

const app = express();

app.use("/api/user",R)

mongoose.
    connect('mongodb+srv://admin:MzRg7CEiyciPXagn@cluster0.exbqbyt.mongodb.net/BlogDb?retryWrites=true&w=majority')
    .then(() => app.listen(8000)).
    then(() => 
    console.log("Connected to Database and Listening on 8000"))
    .catch((err) => console.log(err));


app.listen(8080);



//--experimental-modules --es-module-specifier-resolution=node