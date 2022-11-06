const port = 4000;
const express = require('express');
const app = express();
const fs = require('fs');

app.use(express.static("."));

app.get('/',(req,res)=>{
    fs.readFile('./views/home.html',(err,data)=>{
        if(err){
            console.log(err)
        } else {
            res.write(data);
        }
        res.end();
    })
});
app.get('/form',(req,res)=>{
    fs.readFile('./views/form.html',(err,data)=>{
        if(err){
            console.log(err)
        } else {
            res.write(data);
        }
        res.end();
    })
});
app.get('/views/results.html',(req,res)=>{
    fs.readFile('./views/results.html',(err,data)=>{
        if(err){
            console.log(err)
        } else {
            res.write(data);
        }
        res.end();
    })
});

app.get('/resume',(req,res)=>{
    fs.readFile('./views/myresume.html',(err,data)=>{
        if(err){
            console.log(err)
        } else {
            res.write(data);
        }
        res.end();
    })
});

app.listen(port, ()=>{
    console.log('Server started')
    })
        