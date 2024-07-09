const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    user_type:String,
    phone:Number

})

const userModel=mongoose.model("User",userSchema);
module.exports=userModel;