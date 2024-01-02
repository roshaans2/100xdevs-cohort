const express = require("express")
const app = express()

const cors = require("cors")

app.use(cors())

app.get("/sum",(req,res)=>{
    const {a,b} = req.query
    const sum = parseInt(a)+parseInt(b)
    res.send(sum.toString())
})

app.get("/interest",(req,res)=>{
    const {principal,rate,time} = req.query
    const si = ((principal)*(rate)*(time))/100
    res.json({
        total:(parseInt(principal)+parseInt(si)).toString(),
        interest:si.toString()
    })
})

app.listen(5000,()=>{
    console.log("Server running at port 5000")
})