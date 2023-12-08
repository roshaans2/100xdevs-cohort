const findSum = () => {
    let sum = 0;
    for(let i=1;i<=100;i++){
        sum += i;
    }
    console.log(sum);
}

setTimeout(findSum,1000); 
//setTimeout is async function, the JS thread will not stuck here, it will proceed with next line. 
//So Hello World will be displayed first, meanwhile after 1s the function will be called.
//Incase, if setTimeout is a synchronous function, the js thread will stuck here for 1 s.
//After that the function will be called. And only after that the control will proceed to next line.
//There is no context switching or delegating in Synchronous functions
console.log("Hello World");

const fs = require("fs");

fs.readFile("sample.txt","utf-8",(err,data)=>{
    console.log(data);
})

console.log("Hi, I am printed before file contents because fs.fileRead() is a asynchronous function");

for(let a=0;a<10000000;a++){
    let i = 1;
}

//In this example for loop takes very long, even though after 1s we have to call back findSum function and fs function, 
//since the javascript thread is not idle, only when this for loop ends, the control goes to call back.
//Only when the thread is idle, pending call back will be handled