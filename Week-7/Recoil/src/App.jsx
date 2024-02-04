import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CountContext } from './context'
import { useContext } from 'react'
import {RecoilRoot, useRecoilState, useRecoilValue} from "recoil"
import { countAtom, evenSelector } from './store/atoms/count'

function App() {
 

  return (
    <div>
      <RecoilRoot>
          <Count/>
      </RecoilRoot>
    </div>
  )
}

function Count({setCount}){
  return(
    <div>
      <CountRender/>
      <Buttons/>
    </div>  
  )
}

function CountRender(){
  const count = useRecoilValue(countAtom)
  return(
  <div>
    <div>{count}</div>
    <EvenCountRender/>
  </div>
  )
}

function EvenCountRender(){
  const isEven = useRecoilValue(evenSelector)
  return(
    <div>
      {isEven ? "It is even":null}
    </div>
  )
}

function Buttons(){
  const [count,setCount] = useRecoilState(countAtom)
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
