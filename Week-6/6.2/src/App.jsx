import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './components/Todo'
import Memo from './components/Memo'
import Callback from './components/Callback'
import Ref from './components/Ref'

function App() {
  const [id, setId] = useState(1)

  return (
    // <div>
    //   <button onClick={()=>{setId(1)}}>1</button>
    //   <button onClick={()=>{setId(2)}}>2</button>
    //   <button onClick={()=>{setId(3)}}>3</button>
    //   <button onClick={()=>{setId(4)}}>4</button>
    //    <Todo id={id}/>
    // </div>
    // <Memo/>
    // <Callback/>
    <Ref/>
  )
}

export default App
