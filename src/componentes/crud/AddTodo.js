import React from "react";
import './TodoList.css';


function AddTodo(params){
 return (
 <>
 <form onSubmit={params.onSubmit}>
  <h3>Tasks</h3>
  <input type="text" name="name" />
  <button type="submit">Add</button>
 </form>
 </>
)}

export default AddTodo