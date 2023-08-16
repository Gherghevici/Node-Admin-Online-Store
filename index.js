const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

const data = require("./data.js");

app.use('/',express.static('./public'))
app.use(bodyParser.json());

app.post("/data",(req,res)=>{
    let body = req.body;
    const newData = {
        id:data.length+1,
        title:body.title,
        description:body.description,
        price:body.price,
        quantity:body.quantity
    }
    data.push(newData);
    res.json(data);
})
app.get("/data",(req,res)=>{
    res.send(data)
})


app.get('/',(req,res)=>{
    res.send('hello')
})

app.listen(port,()=>{
    console.log(`server open on http://localhost:${port}/`)
})