import bcrypt from "bcryptjs";
import Users from "../models/users.js";

const createUser=async(userEmail,userPassword,userLinks)=>{


    try{

        const user=new Users({
            email:userEmail,
            password:userPassword,
            links:userLinks
        });

        const salt=await bcrypt.genSalt(10);
        user.password=await bcrypt.hash(user.password,salt);
        let result=await user.save();
        result = {
            status: 200,
            details: result,
          };
          
    
        return result;
    

    }
    catch (err) {
        let errorMessage = err;
        if (err.code === 11000 && err.keyPattern && err.keyPattern.email === 1) {
          // Duplicate key error for the email field
          errorMessage = `Email '${userEmail}' already exists.`;
        }
        return {
          status: 400,
          details: errorMessage,
        };
      }


}


export default createUser;

