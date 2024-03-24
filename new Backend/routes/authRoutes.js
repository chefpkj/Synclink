import {Router} from "express";
import controller from "../controllers/authController.js";
const router = Router();


router.post("/login", controller.login);
router.post("/signup", controller.signup);


router.get("/check",(req,res)=>{
  return res.status(200).send({
    status:200,
    message:"this is message!!"
  })
})



export default router;
// localhost:4000/api/auth
