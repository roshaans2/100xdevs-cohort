const jwt = require("jsonwebtoken")
const secret = "secret"

const value = {
    name:"Deepak",
    password:"deepak"
}

const token = jwt.sign(value,secret)
console.log(token)


