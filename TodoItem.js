import React from 'react'

export const TodoItem = ({todo, onDelete}) => {
    return (
        <div>
            <div>
            <button className="btn btn-danger btn-sm" onClick={()=>{onDelete(todo)}}> X </button><br/>
            
            <img src={todo.imgg} width="150" height="90"/>
            {todo.imgg}
            <h4>{todo.title}</h4>
            <p>{todo.desc}</p>
            <hr width="30%"/>
            </div>
        </div>
    )
}
