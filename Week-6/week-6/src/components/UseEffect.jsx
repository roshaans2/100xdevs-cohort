import React, { useEffect, useState } from "react";

const UseEffect = () => {
    const [todos,setTodos] = useState([])
    useEffect(()=>{
        const fecthData = async() => {
            const response = await fetch("https://sum-server.100xdevs.com/todos")
            const data = await response.json()
            setTodos(data.todos)
        }
        setInterval(()=>{
            fecthData()
        },10000)
    },[])
    return(
        <div>
            {todos.map((todo)=>(
                <Todo key={todo.id} todo={todo}/>
            ))}
        </div>
    )

}

const Todo = ({todo}) => {
    return(
        <div>
            <h1>{todo.title}</h1>
            <h2>{todo.description}</h2>
        </div>
    )
}

export default UseEffect