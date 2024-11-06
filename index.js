const express = require('express');
const app = express();
const port = 3000;

app.get('/',(req,res) =>{
    res.send('Hi Alok How Are You ')
})

app.get('/about',(req,res) =>{
    res.send('Alok This Is  About U Page ')
})
app.listen(port);
