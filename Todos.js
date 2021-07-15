import React from 'react'
import {TodoItem} from "../MyComponents/TodoItem";

export const Todos = (props) => {

    return (
        <div className="container ">
            <h4 className="text-center">--Your Gallary--</h4>

            {props.todos.length === 0? "No Items to Display":
                props.todos.map((todo)=>{
                    return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/> 
                })    
            }
            
            
        </div>
    )
}
