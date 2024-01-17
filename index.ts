
import { connectDatabase } from './config/database';
import dotenv from 'dotenv';
import app from './app';

dotenv.config({path:"config/config.env"});

connectDatabase();


app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});
