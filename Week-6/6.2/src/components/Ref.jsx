import React, { useEffect, useRef, useState } from "react";

const Ref = () => {
    const [data,setData] = useState(10)
    const divRef = useRef()
    useEffect(()=>{
        setTimeout(()=>{
            divRef.current.innerHTML = 20
        },3000)
    })
    return(
        <div ref={divRef}>
            Your data is {data}
        </div>
    )
}

export default Ref