import React from "react";
import { useState, useEffect } from "react";

const Todo = ({id}) => {
    const [todo,setTodo] = useState({})
    useEffect(()=>{
        const getData = async() => {
            const response = await fetch(`https://sum-server.100xdevs.com/todo?id=${id}`)
            const data = await response.json()
            setTodo(data.todo)
        }
        getData();
    },[id])
    return(
       <div>
            <h1>{todo.title}</h1>
            <p>{todo.description}</p>
        </div>
    )
}

export default Todo