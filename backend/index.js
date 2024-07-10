const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");
const userRouter=require('./routes/userRoutes');


const app=express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/houserent");

app.use(userRouter);

app.listen(3001,()=>{
    console.log("server is running");
})