import { useEffect, useState } from "react"

const useIsOnline = () => {
    const [isOnline,setIsOnline] = useState(window.navigator.onLine)
    useEffect(()=>{
        window.addEventListener("online",()=>{
            setIsOnline(true)
        })
        window.addEventListener("offline",()=>{
            setIsOnline(false)
        })
    },[])
    return isOnline
}

const UseIsOnline = () => {
    const isOnline = useIsOnline()
    if(isOnline){
        return "You are online"
    }
    return "you are offline"
}

export default UseIsOnline