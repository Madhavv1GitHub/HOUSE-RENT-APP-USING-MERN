const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");
const userModel=require('./schemas/userModel')


const app=express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/houserent");

app.post('/register',(req,res)=>{
    userModel.create(req.body)
    .then(users=>res.json(users))
    .catch(err=>res.json(err))
})

app.post('/login',(req,res)=>{
    const {email,password,user_type}=req.body;
    userModel.findOne({email:email})
    .then(user=>{
        if(user){
            if(user.password===password && user.user_type===user_type){
                res.json("Success");
            }
            else{
                res.json("The password or Usertype is incorrect");
            }
        }
        else
        {
            res.json("Not Registered");
        }
    })
})


app.listen(3001,()=>{
    console.log("server is running");
})