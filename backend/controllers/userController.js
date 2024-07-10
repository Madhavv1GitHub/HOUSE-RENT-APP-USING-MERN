const User=require('../schemas/userModel');


const Register=(req,res)=>{
    User.create(req.body)
    .then(users=>res.json(users))
    .catch(err=>res.json(err))
}


const Login=(req,res)=>{
    const {email,password,user_type}=req.body;
    User.findOne({email:email})
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
}

module.exports={
    Register,Login
}