const mongoose = require('mongoose');
const url = "mongodb://127.0.0.1:27017/resumeAlign";

mongoose.connect(url,{
    useNewUrlParser:true,
    useUnifiedTopology:true
});

const db = mongoose.connection;

db.on('connected', ()=>{console.log("DB live")})
db.on('disconnected', ()=>{console.log("DB disconnected")})

module.exports = db;