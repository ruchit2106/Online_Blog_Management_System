import express from 'express';
import { getAllUser, signup,login } from '../controllers/user-controller';

const R = express.Router();

R.get("/",getAllUser);
R.post("/signup",signup);
R.post("/login",login);

export default R;
