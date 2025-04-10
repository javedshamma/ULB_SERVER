
const express = require('express');
const router = express.Router();
const Toilet = require('../models/toilet.modle');
const ULB = require('../models/ulb.model');

router.post("/addtoilet",async(req,res)=>{
    try{
        const toilet=req.body;
        // Here we will check whether the toilet exist or not 
        const existingToilet = await Toilet.findOne({toiletid:toilet.toiletid});
    }
    catch(err){
        console.log(err);
        return res.status(500).json({message:"Internal server error"});

    }
})