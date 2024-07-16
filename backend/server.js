const express = require('express');
const app = express();
const db = require('./connection/db')
const loginModel = require('./models/signup');

const bodyParser = require('body-parser');
app.use(bodyParser.json());


app.get('/', (req, res)=>{
    res.send('Connection success');
})

app.post('/login',async(req,res)=>{
    try {
        const data = req.body;
        const loginData = new loginModel(data);

        const response = await loginData.save();

        res.status(200).json(response);
        console.log("Resume Pulse Login");
    } catch (error) {
        res.status(500).json({error:'Internal error'})
    }
})


app.listen(5001, (e)=>{
    if(e){
        console.log('Server Not Live');
    }
    else{
        console.log("Serving on Port 5001");
    }
})