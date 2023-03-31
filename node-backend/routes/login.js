const express=require("express");
const router=express.Router();
const Users=require("../models/users");
const joi=require("joi");
const bcrypt=require("bcrypt");


router.get("/",(req,res)=>{
    return res.send("welcome to login page!!");
})

router.post("/",async(req,res)=>{
    
    const {error}=isValid(req.body);
    if(error){
        return res.status(400).send(error.details[0].message);
    }


    const user=await Users.findOne({email: req.body.email});
    if(!user){
        return res.status(400).send("Invalid email");
    }

    const varifyPass= await bcrypt.compare(req.body.password,user.password);
    if(!varifyPass){
        return res.status(400).send("Invalid password");
    }
   

    return res.header('x-auth-token',user._id).send("Success");

})


function isValid(req_body)
{
    const schema={
        email:joi.string().email().required(),
        password:joi.string().required(),
        links:joi.array(),
    }
    return joi.validate(req_body,schema);

}


module.exports=router;