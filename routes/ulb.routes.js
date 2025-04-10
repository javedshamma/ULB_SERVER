// Here we will create routes to for the ULB 
const express = require('express');
const router = express.Router();
// Here we need to import the model
const ULB = require('../models/ulb.model');
const {auth,createToken} = require('../auth/auth.middleware');

router.post('/register',auth,async(req,res)=>{
    // Here we will create a new ulb
    try{
        const ulb=req.body;
        // Here we will create a new ulb
        // First we check is it already exist or not
       
        const existingUlb = await ULB.findOne({ulbcode:ulb.ulbcode});
       
        if(existingUlb){
            return res.status(400).json({message:"ULB already exists",success:false});
        }
        const newUlb = new ULB(ulb);
        // Here we will save the ulb to the database
        await newUlb.save();
        res.status(201).json({message:"ULB registered successfully",newUlb,success:true});

    }
    catch(err){
        // console.log(err);
        return res.status(500).json({message:"Internal server error"});
    }
});
router.get("/getall",async(req,res)=>{
    // Here we will get all the ulb
    try{
        const ulbs = await ULB.find();
        res.status(200).json({message:"ULBs fetched successfully",ulbs,success:true});
    }
    catch(err){
        console.log(err);
        return res.status(500).json({message:"Internal server error"});
    }
})
// Here we will use login to get the ulb by id
router.post('/login',async(req,res)=>{
    try{
        const{id,password,ulbcode} = req.body;
    
        //// Here whether there is any ULB exist with this id or not
        const ulb=await ULB.findOne({ulbcode:ulbcode});
        // Here we will check whether the ulb exist or not
   
        if(!ulb){
            return res.status(400).json({message:"ULB not found",success:false});
            
        }
        // Here we will compare the password with the hashed password
      
        const isMatch= await ulb.comparePassword(password,ulb.password);
     
        if(!isMatch){
            return res.status(400).json({message:"Invalid credentials",success:false});
        }
        const token = await createToken(ulb._id);

        res.status(200).json({message:"ULB logged in successfully",ulb,success:true,token});

    }
    catch(err){
        return res.status(500).json({message:"Internal server error"});
    }
})


module.exports = router;