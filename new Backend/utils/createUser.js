import bcrypt from "bcrypt";
import Users from "../models/users.js";

const createUser=async(userEmail,userPassword,userLinks)=>{
    const user=new Users({
        email:userEmail,
        password:userPassword,
        links:userLinks
    });
    const salt=await bcrypt.genSalt(10);
    user.password=await bcrypt.hash(user.password,salt);
    const result=await user.save();
    console.log(result);


}


export default createUser;