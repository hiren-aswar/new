const express=require("express");
const app=express();
app.get("/",()=>{
    res.send("hello world");
})
app.listen(3001,()=>{
    console.log("server created");
})