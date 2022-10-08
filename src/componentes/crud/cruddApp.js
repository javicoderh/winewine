import NavBar from './componentes/nav.js'; 
import { useState, useEffect } from 'react';
import Greeting from './componentes/page2';
import { Link , Route } from "wouter";
import axios from "axios"
import TodoList from './componentes/crud/TodoList';
import AddTodo from './componentes/crud/AddTodo';
import EditTodo from './componentes/crud/editTodo';



function App() {

const [todos, setTodos] = useState([]);
const [edit, setEdit] = useState(false);
const [editTodo, setEditTodo] = useState({});


function onDelete(id) {
  const newTodos = todos.filter(todo => todo.id !== id);
  setTodos(newTodos);
}


function onSubmit(e) {
  e.preventDefault();
  const name = e.target.name.value;
  setTodos(prev => [...prev, { id: prev.length + 1, name}]);
  e.target.reset();
}


function onEdit(todo) {
  setEdit(true);
  setEditTodo(todo);
}

function onSubmitEdit(editedTodo) {

  const newTodos = todos.map(todo => {
    if (editedTodo.id === todo.id) {
      return { ...todo, name: editedTodo.name };
    }
    return todo;
  });
  setTodos(newTodos);
  setEdit(false);
  setEditTodo({});
}

  return (
  <div className="App">        
      <h1>Sprint backlog</h1>
      { edit ?
      <EditTodo item={editTodo} onSubmitEdit={onSubmitEdit} onCancel={() => setEdit(false)}/> 
    : <AddTodo onSubmit={onSubmit}/> }  
      <TodoList todos={todos} onDelete={onDelete} onEdit={onEdit} />       
  </div>
  );
}

export default App;
