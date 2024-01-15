// src/index.ts
import express from 'express';
import dotenv from 'dotenv';
import { connectDatabase } from './config/database';
import { UserModel } from './models/userModel';
const app = express();
const port = 4000;

dotenv.config({path:"config/config.env"});

connectDatabase();

app.get('/', async(req, res) => {
  
  res.send('Hello, Express TypeScript!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
