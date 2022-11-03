import express from 'express';
import { getAllUser } from '../controllers/user-controller';

const R = express.Router();

R.get("/",getAllUser);

export default R;
