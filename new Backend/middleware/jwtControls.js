import jwt, { decode } from "jsonwebtoken";
import { auth } from "../config/config.js";

const createToken=async (id)=>{
    let payload={id:id};
    let token=jwt.sign(payload,auth?.secret);
    return token;
}

const authorizeToken=async(req,res,next)=>{
    let token=req.header("x-auth-token");
    if(!token){
        return res.status(401).send("Please enter authorization token in header");
    }
    jwt.verify(token,auth?.secret, async (error,decoded)=>{
      console.log("this is bas",decoded)
    } )
    next();
}
const jwtControls={
    createToken,
    authorizeToken
}
export default jwtControls;