const express = require("express")
const app = express()

let numberOfRequests = 0;
let postRequests = 0;

app.use((req,res,next)=>{
    numberOfRequests++
    console.log(numberOfRequests)
    next()
})

const calculatePostRequests = (req,res,next) => {
    postRequests++
    console.log(postRequests)
    next()
}

app.get("/",(req,res)=>{
    res.send("Get")
})

app.post("/",calculatePostRequests,(req,res)=>{
    const count = req.body.count;
    res.send("Post")
})

//This middleware is called whenever there is an exception
//global catches
app.use((err,req,res,next)=>{
    res.json({
        msg:"Sorry, there is some issue"
    })
})

app.listen(5000,()=>{
    console.log("Server running at port 5000")
})

