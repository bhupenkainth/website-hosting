const mongoose = require("mongoose");

const employeeschema = new mongoose.Schema({
    nam : {
        type:String,
        required:true
    },
    phonenumber: {
        type:Number,
        required:true,
        unique:true
    },
    email: {
        type:String,
        required:true,
        unique:true
    },
    help: {
        type:String,
        required:true
    },


})


const Register = new mongoose.model("Register", employeeschema);

module.exports= Register;