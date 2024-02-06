import './App.css'
import Flex from './components/Flex'
import Grid from './components/Grid'
import Responsive from './components/Responsive'
import ResponsiveGrid from './components/ResponsiveGrid'

function App() {

  return (
    <>
      <div style={{display:"flex",justifyContent:"center"}}>
        <div style={{backgroundColor:"red"}}>Hi</div>
        <div style={{backgroundColor:"green"}}>Hi</div>
        <div style={{backgroundColor:"yellow"}}>Hi</div>
      </div>

      <Flex/>
      <Grid/>

      <Responsive/>
      <ResponsiveGrid/>
    </>    
  )
}

export default App
