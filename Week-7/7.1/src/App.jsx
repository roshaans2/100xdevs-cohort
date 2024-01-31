import React,{ lazy,useState } from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Dashboard from './components/Dashboard'
import Landing from './components/Landing'
import Appbar from './components/Appbar'

const LazyLoading = lazy(() => import("./components/LazyLoading"))

function App() {
  
  return (
    <div>
      <BrowserRouter>
        <Appbar/>
        <Routes>
          <Route path='/dashboard' element={<Dashboard/>} />
          <Route path='/' element={<Landing/>} />
          <Route path='/lazy' element={<LazyLoading/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
