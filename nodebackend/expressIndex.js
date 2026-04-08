const express=require('express');
const cors=require('cors');
const app=express();  // createserver in node
const PORT=4007;

const fs=require('fs').promises
//middleware
app.use(express.json())
app.use(cors());
app.get('/',(req,res)=>{
res.setHeader('Content-Type','application/json')
res.send({msg:"Hiii...."})
})

app.get("/msg",(req,res)=>{

})

app.post('/login',(req,res)=>{

})

app.post('/register',(req,res)=>{
 const {name,email,password}=req.body;
 console.log(name)
 res.send({msg:"Data recieved at /register"})
})


app.listen(PORT,()=>{
    console.log("Express Server is running on:"+PORT)
})