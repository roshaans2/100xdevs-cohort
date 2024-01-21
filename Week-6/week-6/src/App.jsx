import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Rerender from './components/Rerender'
import Wrapper from './components/Wrapper'
import RealWrapper from './components/RealWrapper'
import UseEffect from './components/UseEffect'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UseEffect/>
  )
}

export default App
