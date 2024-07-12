const express =require('express');
const router=express.Router();
const propertyController=require('../controllers/propertyController');

router.get('/propertyget',propertyController.PropertyDetails);

router.post('/addproperty',propertyController.uploadProperty)

module.exports=router;