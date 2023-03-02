import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    role: {
        type: String,
        enum: ["admin", "client"],
        default: "client",
        },
})

module.exports = mongoose.models.User || mongoose.model('User',userSchema)