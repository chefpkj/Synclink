import mongoose from "mongoose";


const userSchema=new mongoose.Schema({
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    notes:{type:Array}
})
const Users=mongoose.model('users',userSchema);

export default Users;
