import express from "express";
import helmet from "helmet";
import cors from "cors";
import routes from "./routes/index.js"
import { configureDB } from "./config/connection.js";
import createUser from "./utils/createUser.js";

const app = express();

app.use(express.json());
app.use(helmet());
app.use(cors());
configureDB();



app.use("/api",routes);

app.use("/status",(req,res)=>{
   return res.status(200).json({"status":"200","message":"this is it!!"});
})

app.use(function (req, res, next) {
    let err = new Error("No Matching Route Please Check Again...!!");
    err.status = 404;
    next(err);
 });
 app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.json({ Error: { message: err.message }});
 });

//  createUser("chefpkj@synclink.com","Ayush@123",["this is your admin","i am chefpkj","my name is piyush"]);



export default app;
