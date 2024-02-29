interface User{
    firstname:string,
    lastname:string,
    email:string,
    age:number
}

function isValid(user:User):boolean{
    if(user.age > 18){
        return true
    }
    return false
}