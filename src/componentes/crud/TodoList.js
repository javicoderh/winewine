import React from "react";
import './TodoList.css';

function TodoList(params) {
 return ( 
  <>
  <div className="list">
   {
   params.todos.map(todo => {
   return (  
   <div key={todo.id} className="todoItem"> 
   <p>- {todo.name}</p>
   <button onClick={() => params.onDelete(todo.id)} className="delete">Delete</button>
   <button onClick={() => params.onEdit(todo)} className="edit">Edit</button>
   </div>
  )})}
  </div>
  </>
 )
}

export default TodoList

