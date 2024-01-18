import React from "react";

const Todo = ({todo}) => {
    return(
        <div>
            <h1>{todo.title}</h1>
            <h2>{todo.description}</h2>
            {todo.completed && <span>Done</span>}
        </div>
    )
}

export default Todo