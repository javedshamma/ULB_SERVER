// Here we will export mongoose
const mongoose = require('mongoose');
/// Here we will require bcrypt
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");
        

const ulbSchema=new mongoose.Schema({
   ulbname:{
         type:String,
         required:[true,"ULB name is required"],
         trim:true,
         unique:true
   },
    ulbcode:{
            type:Number,
            required:[true,"ULB code is required"],
            trim:true,
            unique:true
    },
    state:{
        type:String,
        required:[true,"State is required"],
        trim:true
    },
    district:{
        type:String,
        required:[true,"District is required"],
        trim:true
    },
    city:{
        type:String,
        required:[true,"City is required"],
        trim:true
    },
    password:{
        type:String,
        required:[true,"Password is required"],
        trim:true
    },
    ulbstatus:{
        type:String,
        status:["council","municipal","corporation"],
        default:"council"
    },
    communityToilets:{
        type:Number,
        default:0
    },
    publicToilets:{
        type:Number,
        default:0
    },
    totalVehicle:{
        autoTipper:{
            type:Number,
            default:0
        },
        tractor:{
            type:Number,
            default:0
        },
        otherVehicles:{
            type:Number,
            default:0
        }
    },
    totalLargeDustbins:{
        type:Number,
        default:0
    },
    totalSmallDustbins:{
        type:Number,
        default:0
    },
})
ulbSchema.pre("save",async function(next){
    try{
        if(!this.isModified("password")){
            return next();
        }
        this.password=await bcrypt.hash(this.password,10);
        next();
    }
    catch(err){
        console.log(err);
        next(err);
    }
});


ulbSchema.methods.comparePassword=async function(ulbpassord,next){
    try{
        isMatch=await bcrypt.compare(ulbpassord,this.password); 
        return isMatch;
    }
    catch(err){
        console.log(err);
        next(err);
    }
}

const ulbModel=mongoose.model("ULB",ulbSchema)
module.exports=ulbModel;