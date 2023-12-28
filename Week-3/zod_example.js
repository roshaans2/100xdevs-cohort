const zod = require("zod");


//If this is an array of Number with atleast one input, return true, else return false
const validateInput = (arr)=>{
    const schema = zod.array(zod.number())
    const response = schema.safeParse(arr)
    console.log(response)
}

const validateCredentials = (obj) => {
    const schema = zod.object({
        email:zod.string().email(),
        password:zod.string().min(8),
    })
    const response = schema.safeParse(obj)
    console.log(response)
}


validateInput([1,2,3,4,5])

validateCredentials({email:"abc@gmail.com",password:"password"})