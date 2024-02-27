import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios"
import UseTodos from './components/UseTodo'
import UseIsOnline from './components/UseIsOnline'

function App() {
  return (
    <>
      <UseTodos/>
      <UseIsOnline/>
    </>
  )
}


export default App
