import mongoose from "mongoose";
import {dbUrl} from "./config.js"

export function configureDB(){
    let env=process.env.NODE_ENV || "development";
    mongoose.connect(dbUrl)
    .then(()=>console.log(`connected to ${env}'s db`))
    .catch((err)=>console.log("Something went wrong while connecting to db.",err));

}