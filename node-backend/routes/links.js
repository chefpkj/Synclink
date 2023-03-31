const express=require("express");
const router=express.Router();
const Users=require("../models/users");
const auth=require("../middleware/auth");


//to get all my links  (in main body-home page)
router.get("/links",auth,async(req,res)=>{
    return res.status(200).send(req.user.links);
});

//to get specific link (in add-items page)
router.get("/links/:id",auth,async(req,res)=>{
    
    const data=req.user.links[req.params.id];
    
    if(!data){
        return res.status(400).send("Id not found.");
    }
    const links=[];
    links[0]=data;
    return res.send(links);
});

//to post a link (in add-items page)
router.post("/links",auth,async(req,res)=>{
    const data=await Users.findById(req.user._id);
    if(!data){
        return res.status(400).send("Something went wrong!!");
    }
    const linkToPost=req.body.link;
    if(!linkToPost){
        return res.status(400).send("Link field is empty!!")
    }
    data.links.splice(0,0,req.body.link);
    const result= await data.save();
    return res.send(result);

});

//to delete a link (in updateItem page)
router.delete("/links/:id",auth,async(req,res)=>{
    const data=await Users.findById(req.user._id);
    if(!data){
        return res.status(400).send("Id not found");
    }
    const idx=data.links.indexOf(req.user.links[req.params.id]);
    data.links.splice(idx,1);
    const result =await data.save();

    return res.send(data.links);
})

//to update a link data (in updateItem page)
router.put("/links/:id",(req,res)=>{
    //checking if id is present or not
    const data=links.find(c=>c.id===parseInt(req.params.id));
    if(!data){
        return res.status(404).send("id not found.");
    }
    //if present updating the requested link
    data.link=req.body.link;
    res.status(200).send(data);

})


module.exports=router;
