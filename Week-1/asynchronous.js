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