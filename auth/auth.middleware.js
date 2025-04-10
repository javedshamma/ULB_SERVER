// Here we will authenticate the user using the password and generate a token for the user

const jwt = require("jsonwebtoken");
const ULB=require("../models/ulb.model");
const bcrypt = require("bcryptjs");
const dotenv = require("dotenv");
dotenv.config();


const auth=async(req,res,next)=>{
    try{
        const token=req.header('Authorization').replace('Bearer ','');
        if(!token){
            return res.status(401).send({error:'Please authenticate'});
        }
        const decoded=jwt.verify(token,process.env.JWT_SECRET);

        next();

    }
    catch(err){
        console.log(err);
        return res.status(401).send({error:'Please authenticate'});
    }
}
// Now we will create token for the user after verifying the password

const createToken=async(ulb)=>{

    try{
        const token=jwt.sign({id:ulb._id},process.env.JWT_SECRET,{expiresIn:'1d'});
        return token;

    }
    catch(err){
        console.log(err);
        return res.status(500).send({error:'Internal server error'});
    }
}
module.exports={auth,createToken};