import express from "express";

const UserRouter = express.Router();

UserRouter.get("/demo", (req,res)=>{
   res.send("hi")

});


export default UserRouter;