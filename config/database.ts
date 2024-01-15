const mongoose = require("mongoose");

export const connectDatabase = () =>{
    mongoose.connect(process.env.DB_URI).then((data:any) =>{
        console.log(`MongoDb connected with server: ${data.connection.host}`);
    }) 
}