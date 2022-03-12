const express = require('express');
const app = express();
const importData = require('./data.json');

app.get('/',(req,res)=>{
    res.send('Namaste 🙏 ,Welcome to our family')
})

app.get('/family',(req,res)=>{
    res.send(importData);
})

app.listen(3000,()=>{
console.log('server is listening on port no. 3000')
})