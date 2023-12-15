const myOwnSetTimeOut = (fn,duration) => {
    setTimeout(fn,duration);
}




myOwnSetTimeOut(function(){
    console.log("Hello (Not a promise)")
},1000)


const promisifiedmyOwnSetTimeOut = (duration) => {
  return new Promise((resolve)=>{
    setTimeout(resolve,duration)
  })  
}


promisifiedmyOwnSetTimeOut(2000).then(function(){
    console.log("Hello (promise)")
})