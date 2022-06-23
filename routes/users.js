import express from "express";



const router = express.Router();

//end point
router.get("/",(req,res)=>{
    res.send("hello endpoint")
})


export default router