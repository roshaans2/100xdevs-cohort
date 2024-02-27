import { useEffect, useState } from 'react'
import '../App.css'
import axios from "axios"

function useTodos(n){
  const [todos,setTodos] = useState([])
  const [loading,setLoading] = useState(true)
  const getTodos = async() => {
    const data = await axios.get("https://sum-server.100xdevs.com/todos")
    console.log(data.data.todos)
    setTodos(data.data.todos)
    setLoading(false)
  }
  useEffect(()=>{
    const value = setInterval(()=>{
      getTodos()
    },n*1000)
    getTodos()
    return ()=>{
      clearInterval(value)
    }
  },[n])
  return {todos,loading}
}

function UseTodos() {
  const {todos,loading} = useTodos(5)
  if(loading){
    return <div>Loading..</div>
  }
  return (
    <div>
      {todos.map((todo)=><Todo key={todo.id} todo={todo} />)}
    </div>
  )
}

function Todo({todo}){
  return(
    <div>{todo.title}</div>
  )
}

export default UseTodos
