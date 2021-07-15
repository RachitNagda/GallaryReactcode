import './App.css';
import Tophead from "./MyComponents/Tophead";
import { Topform } from "./MyComponents/Topform";
import { Todos } from "./MyComponents/Todos";
import React,{useState, useEffect} from 'react';

function App() {

  let initTodo;
  if(localStorage.getItem("todos")===null)
  {
    initTodo=[];
  }
  else{
    initTodo=JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete=(todo)=>{
    console.log("i am onDelete of todo", todo);
    setTodos(todos.filter((e)=>{
        return e!==todo;
    }));
    localStorage.setItem("todos",JSON.stringify(todos));
    
    
  }

  const addTodo=(imgg,title,desc)=>{
    console.log("I am Adding this todo",imgg,title,desc);
    let sno;
    if(todos.length === 0)
    {
      sno=1;
    }
    else
    {
      sno = todos[todos.length-1].sno+1;
    }
    
    const myTodo={
      sno:sno,
      imgg:imgg,
      title:title,
      desc:desc
    }
    setTodos([...todos,myTodo]);
    console.log(myTodo);
    
  }
  
  const [todos, setTodos]=useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos));
  }, [todos])
  return (
    <>
      <Tophead/>
      <Topform addTodo={addTodo}/><hr/>
      <Todos todos={todos} onDelete={onDelete}/>

    </>
  );
    
}

export default App;

