const Users=require("../models/users");

module.exports=async function(req,res,next){
    const token=req.header("x-auth-token");
    if(!token){
        return res.status(408).send("Access Denied!!, No jwt token provided");
    }
    
    // try{
    //  const decoded_payload=jwt.varify(token,"12345");
    //  req.user=decoded_payload;
    //  next();
    // }
    // catch(err){
    //     console.log(token);

    //     return res.status(400).send("Invalid jwt token");
    // }
    const user= await Users.findById({_id:token});
    if(!user){
        return res.status(400).send("Invalid jwt token");
    }
    else{
         req.user=user;
         next(); 
           }


};