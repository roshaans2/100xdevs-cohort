import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Rerender from './components/Rerender'
import Wrapper from './components/Wrapper'
import RealWrapper from './components/RealWrapper'

function App() {
  const [count, setCount] = useState(0)

  return (
    <RealWrapper/>
  )
}

export default App
