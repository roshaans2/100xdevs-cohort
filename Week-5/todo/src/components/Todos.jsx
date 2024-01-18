import React, { useState } from "react";
import Todo from "./Todo";

const Todos = () => {
    const [todos,setTodos] = useState([
        {title:"Workout",description:"Go to Gym at 3pm", completed:false},
        {title:"Breakfast",description:"Have breakfast at 10am",completed:true}
    ])
    return(
        <div>
            {todos.map(todo=>(
                <Todo todo={todo}/>   
            ))}
        </div>
    )
}

export default Todos