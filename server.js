const express = require("express")
const app = express();

app.listen(3000 , ()=>{
    console.log("Server Started at port no. 3000");
});

app.get('/',(req,res)=>{
    res.send("Hello, Kaise Ho Saare")
})
app.get('/login',(req,res)=>{
    res.send("Login")
})
app.get('/singup',(req,res)=>{
    res.send("Singup Page")
})
app.get('/blog',(req,res)=>{
    res.send("Blog Post")
})