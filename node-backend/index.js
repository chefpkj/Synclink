const express=require("express");
const app=express();
app.use(express.json());
const login=require("./routes/login");
const links=require("./routes/links");
const mongoose=require("mongoose");


mongoose.connect("mongodb://localhost/synclink")
                                            .then(()=>console.log("connected to db..."))
                                            .catch((err)=>console.error('Error:',err));

app.use("/login",login);
app.use("/api",links);

app.listen("3017",()=>{
    console.log("listening on port 3017...");
});


