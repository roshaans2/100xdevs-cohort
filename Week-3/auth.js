const express = require("express")
const app = express()
const zod = require("zod")

app.use(express.json())

const validateInput = (obj)=>{
    const schema = zod.object({
        email:zod.string().email(),
        password:zod.string().min(8)
    })
    const response = schema.safeParse(obj)
    return response
}

app.post("/login",(req,res)=>{
    const response = validateInput(req.body)
    if(!response.success){
        res.json({
            msg:"Your input are not valid"
        })
        return
    }
})

app.listen(5000,(req,res)=>{
    console.log("Server running at port 5000")
})