const Property=require('../schemas/propertyModel');

//Getting Property Details Uploaded By Owner From DB
const PropertyDetails=(req,res)=>{
    Property.find({}).then((ptdetails)=>{
        res.json(ptdetails)
    }).catch((err)=>{
        console.log(err);
    }) 
}

//image upload 
//  Uploading Property Details from Owner To DB
 const uploadProperty=(req,res)=>{
    Property.create(req.body)
    .then(ptdetails=>res.json(ptdetails))
    .catch(err=>res.json(err))
   
 }

module.exports={PropertyDetails ,uploadProperty} 
