const express = require("express")
const app = express()

function add(a,b){
    return a+b;
}
function subtract(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;
}
function divide(a,b){
    return a/b;
}

app.get("/add",(req,res)=>{
    console.log(req.params)
    const a = parseInt(req.query.a)
    const b = parseInt(req.query.b)
    res.send(add(a,b).toString())
})

app.get("/subtract",(req,res)=>{
    const a = parseInt(req.query.a)
    const b = parseInt(req.query.b)
    res.send(subtract(a,b).toString())
})
app.get("/multiply",(req,res)=>{
    const a = parseInt(req.query.a)
    const b = parseInt(req.query.b)
    res.send(multiply(a,b).toString())
})
app.get("/divide",(req,res)=>{
    const a = parseInt(req.query.a)
    const b = parseInt(req.query.b)
    res.send(divide(a,b).toString())
})


app.listen(5000,()=>{
    console.log("Server running at port 5000")
})