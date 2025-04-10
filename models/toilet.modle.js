// Here we will create the model for toilet
const mongoose = require("mongoose");
const ULB = require("./ulb.model");
const toiletSchema=new mongoose.Schema({
    toiletid:{
        type:String,
        required:[true,"Toilet ID is required"],
        trim:true,
        unique:true
    },
    toiletAddress:{
        type:String,
        required:[true,"Toilet Address is required"],
        trim:true
    },
    category: {
        type: String,
        required: [true, "Category is required"],
        enum: ["community toilet", "public toilet", "urinal"],
        default: "public toilet"
    },
    toiletStatus:{
        type:String,
        enum:["open","closed"],
        default:"closed"
    },
    toiletRating:{
        type:Number,
        default:0
    },
    isClean:{
        type:Boolean,
        default:false
    },
    location: {
        lat: {
            type: Number,
           
        },
        lng: {
            type: Number,
    
        }
    },
    careTaker:{
        type: String
    },
    oandm:{
        type: String,
        
        default: "ulb"
    },
    socketID:{
        type:String,
        default:""
    },
    toiletULB: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "ULB",
    
    }
    
})
const Toilet=mongoose.model("Toilet",toiletSchema)
module.exports=Toilet;