import express from 'express';
import bodyParser from "body-parser";
// import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
// import errorMiddleware from"./middleware/error";
const app = express();

dotenv.config({path:"config/config.env"});
app.use(express.json({limit:"50mb"}));
// app.use(cookieParser());
app.use(bodyParser.urlencoded({extended:true}));


// //route imports
import user from './routes/userRoutes';
// const product =require("./routes/productRoute");
// const order = require("./routes/orderRoute");
// const payment=require("./routes/paymentRoute");
// app.use("/api/v1", product);
app.use("/api/v1", user);
// app.use("/api/v1", order);
// app.use("/api/v1", payment);


//middle ware for errors
// app.use(errorMiddleware);

export default app;