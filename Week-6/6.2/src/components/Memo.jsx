import React, { useMemo, useState } from "react";

const Memo = () =>{
    const [input,setInput] = useState(0);
    const [counter,setCounter] = useState(0);

    let count = useMemo(()=>{
        let count = 0;
        for(let i=1;i<=input;i++){
            count = count + i;
        }
        return count;
    },[input])
 
    const handleChange = (e) => {
        setInput(e.target.value)
    }
    return(
        <div>
            <input type="number" value={input} onChange={handleChange}/>
            <p>Sum from 1 to {input} is {count}</p>
            <br />
            <button onClick={()=>{setCounter(counter+1)}}>Counter({counter})</button>
        </div>
    )
}

export default Memo