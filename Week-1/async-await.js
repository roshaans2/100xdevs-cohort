function AsyncFunction(){
    return new Promise((resolve)=>{
        resolve("Hi there");
    })
}

// AsyncFunction().then((data)=>{
//     console.log(data);
// })

async function main(){
    const value = await AsyncFunction();
    console.log(value);
}

main();

