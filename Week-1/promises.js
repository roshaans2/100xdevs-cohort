const fs = require("fs");

//Creating own asynchronous function in ugly way

function readMyFile(cb){
    fs.readFile("sample.txt","utf-8",(err,data)=>{
        cb(data);
    })
}

function readData(data){
    console.log(data);
}

readMyFile(readData);


//Asynchronous function can be created in a neat way by using promises
//There is no callback in promises

function readMyFileUsingPromise(){
    return new Promise((resolve)=>{
        fs.readFile("sample.txt","utf-8",(err,data)=>{
            resolve(data);
        })
    })
}

function onDone(data){
    console.log(data);
}

readMyFileUsingPromise().then(onDone);

//Here the function returns a promise, onDone recieved data from resolve whenever promise is returned

function AsyncFunction(){
    return new Promise((resolve)=>{
        setTimeout(resolve,2000);
    })
}

AsyncFunction().then(()=>{
    console.log("Hi");
})