// Here we will create the server
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config();
const express = require('express');
const app= express();
app.use(express.json());
const mongoose = require('mongoose');
// const cors = require('cors');
const router=require('./routes/ulb.routes');
// purpose of cors is  
// to allow cross-origin requests from the frontend to the backend
app.use(cors());
// const corsOptions = {
//     origin: "http://localhost:5173", //     methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
//     credentials: true, // Allow credentials (cookies, authorization headers, etc.)               
//     preflightContinue: false, // Pass the CORS preflight response to the next handler
//     optionsSuccessStatus: 204, // Response status code for successful OPTIONS requests   
// };
mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("Database connected successfully")
}).catch((err)=>{
    console.log("Database connection failed")
});
app.use(express.urlencoded({extended:true}));
app.get("/",(req,res)=>{
    res.send("Hello from server")
    console.log("Hello from server")
});
app.use("/ulb",router);
const port=parseInt(process.env.PORT);
app.listen(port,()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
})

