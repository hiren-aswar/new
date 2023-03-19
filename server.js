const express=require("express");
const app=express();
app.get("/",()=>{
    res.send("hello world");
})
app.get("/registyer",()=>{
    res.send("okay");
})
app.listen(3001,()=>{
    console.log("server created");
})