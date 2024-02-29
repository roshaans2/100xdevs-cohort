import './App.css'

interface TodoProp{
  title:string,
  description:string
}

function App() {
  
  return (
    <>
      <Todo title='title' description='description' />
    </>
  )
}

function Todo(props:TodoProp){
  return(
    <>
      <div>{props.title}</div>
      <div>{props.description}</div>
    </>
  )
}



export default App
