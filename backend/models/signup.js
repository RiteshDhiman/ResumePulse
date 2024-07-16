const mongoose = require('mongoose');

const loginSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    }
})

const loginData = mongoose.model('loginData',loginSchema);

module.exports = loginData;