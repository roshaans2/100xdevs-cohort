import React, { memo,useCallback, useState } from "react";

const Callback = () => {
    const [counter,setCounter] = useState(0);
    const a = useCallback(()=>{
        console.log("Hi there")
    },[])
    return(
        <div>
            <button onClick={()=>{setCounter(counter+1)}}>Counter({counter})</button>
            <Demo a={a}/>
        </div>
    )
}

const Demo = memo(({a}) => {
    console.log("rerender")
    return (
        <div>Hi there</div>
    )
})

export default Callback