const mongoose=require('mongoose');

const propertySchema=new mongoose.Schema({
    propertyname:String,
    propertytype:String,
    bedrooms:Number,
    bathrooms:Number,
    livingrooms:Number,
    kitchen:Number,
    sqft:Number,
    address:String,
    propertyimage:String
})

const  propertyModel=mongoose.model("Property",propertySchema);
module.exports=propertyModel;