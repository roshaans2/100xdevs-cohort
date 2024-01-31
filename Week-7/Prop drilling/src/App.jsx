import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CountContext } from './context'
import { useContext } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <CountContext.Provider value={count}>
        <Count count={count} setCount={setCount}/>
      </CountContext.Provider>
    </div>
  )
}

function Count({setCount}){
  return(
    <div>
      <CountRender/>
      <Buttons setCount={setCount}/>
    </div>  
  )
}

function CountRender(){
  const count = useContext(CountContext)
  return(
    <div>{count}</div>
  )
}

function Buttons({setCount}){
  const count = useContext(CountContext)
  return(
    <div>
      <button onClick={()=>{
        setCount(count+1)
      }}>Increment</button>
      <button onClick={()=>{
        setCount(count-1)
      }}>Decrement</button>
    </div>
  )
}

export default App
