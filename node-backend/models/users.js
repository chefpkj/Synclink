const mongoose=require("mongoose");
const bcrypt=require("bcrypt");

const userSchema=new mongoose.Schema({
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    links:{type:Array},
});

const Users=mongoose.model('users',userSchema);


// async function createUser(){
    
//     const user=new Users({
//         email:"chefpkj@synclink.com",
//         password:"Ayush@123",
//         links:["this is your admin","i am chefpkj","my name is piyush"]
//     })
//     const salt=await bcrypt.genSalt(10);
//     user.password=await bcrypt.hash(user.password,salt);
//     const result=await user.save();
//         console.log(result);
// }

// createUser();

module.exports=Users;