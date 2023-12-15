const fs = require("fs");

fs.readFile("a.txt","utf-8",(err,data)=>{
    console.log("Data read from the file is: ")
    console.log(data);
})

console.log("After fs read function")