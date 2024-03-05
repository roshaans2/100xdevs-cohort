import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const express = require("express")
const app = express()
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const secret:string = "mysecret"


app.use(express.json())

interface SignupBody {
    username:string,
    firstname:string,
    lastname:string,
    password:string
}

interface SinginBody {
    username:string,
    password: string
}

app.post("/signup",async(req:any,res:any)=>{
    const {username,firstname,lastname,password}:SignupBody = req.body
    const hashedPassword:string = await bcrypt.hash(password,12)
    const response = await prisma.user.create({
        data: {
            username:username,
            firstname:firstname,
            lastname:lastname,
            password:hashedPassword

        }
    })
    const token:string = jwt.sign({id:response.id},secret)
    res.status(200).json({
        msg:"User created successfully",
        token:token
    })
})

app.post("/signin",async(req:any,res:any)=>{
    const {username,password}:SinginBody = req.body
    const user = await prisma.user.findFirst({
        where:{username:username}
    })
    await bcrypt.compare(password,user?.password,(err:any,result:any)=>{
        if(err){
            res.json({
                msg:err
            })
            return;
        }
    })
    const token:string = jwt.sign({id:user?.id},secret)
    res.status(200).json({
        msg:"Signedin successfully",
        token:token
    })

})

app.listen("8000",()=>{
    console.log("Server running at port 8000")
})