function greet(firstname:string){
    console.log(firstname)
}

function sum(a:number,b:number):number{
    return a+b
}

function isLegal(age:number):boolean{
    if(age>=18) return true
    else return false
}

function delayedCall(fn:()=>void){
    setTimeout(fn,5000)
}

greet("Shankar")
console.log(sum(2,3))
console.log(isLegal(21))

delayedCall(function(){
    console.log("delayed function call")
})