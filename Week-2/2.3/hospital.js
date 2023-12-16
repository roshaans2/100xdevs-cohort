const express = require("express")
const app = express()

app.use(express.json())

const users = [{
    name:"John",
    kidneys:[{
        healthy:true
    }]
}]

app.get("/",(req,res)=>{
    let johnKidneys = users[0].kidneys
    let totalKidneys = johnKidneys.length
    let healthyKidneys = 0;
    for(let i=0;i<johnKidneys.length;i++){
        if(johnKidneys[i].healthy){
            healthyKidneys = healthyKidneys + 1
        }
    }
    let unhealthyKidneys = totalKidneys - healthyKidneys
    res.json({
        johnKidneys,
        healthyKidneys,
        unhealthyKidneys
    })
})

app.post("/",(req,res)=>{
    let kidney = req.body
    let johnKidney = users[0].kidneys
    users[0].kidneys.push(kidney)
    res.json({
        johnKidney
    })
})



app.put("/",(req,res)=>{
    let atleastOneUnhealthyKidney = false;
    for(let i=0;i<users[0].kidneys.length;i++){
        if(!users[0].kidneys[i].healthy){
            atleastOneUnhealthyKidney = true;
        }
    }
    if(atleastOneUnhealthyKidney){
        let johnKidneys = users[0].kidneys
        for(let i=0;i<johnKidneys.length;i++){
            johnKidneys[i].healthy = true
        }
        res.json({
            johnKidneys
        })
    }
    else{
        res.status(411).json({
            msg:"You don't have bad kidney"
        })
    }
})

app.delete("/",(req,res)=>{
    let newKidneys = []
    let atleastOneUnhealthyKidney = false;
    for(let i=0;i<users[0].kidneys.length;i++){
        if(!users[0].kidneys[i].healthy){
            atleastOneUnhealthyKidney = true;
        }
    }
    console.log(atleastOneUnhealthyKidney)
    if(atleastOneUnhealthyKidney){
        for(let i=0;i<users[0].kidneys.length;i++){
            if(users[0].kidneys[i].healthy){
                newKidneys.push(users[0].kidneys[i])
            }
        }
        users[0].kidneys = newKidneys;
        res.json({
            msg:"done"
        })
    }
    else{
        res.status(411).json({
            msg:"You have no bad kidney"
        })
    }
})


app.listen(5000,()=>{
    console.log("Server running at port 5000")
})