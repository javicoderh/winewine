import './App.css';
//import NavBar from './componentes/nav.js'; 
//import { useState, useEffect } from 'react';
//import Greeting from './componentes/page2';
//import { Link , Route } from "wouter";
//import axios from "axios"
//import TodoList from './componentes/crud/TodoList';
//import AddTodo from './componentes/crud/AddTodo';
//import EditTodo from './componentes/crud/editTodo';
import RedRedWine from './componentes/redRedWine';
import { useState } from 'react';
import React from "react";
import ReactDOM from "react-dom";
import { Link , Route } from "wouter"






function App() {
  const [name, setName] = useState("");

  function onChange(e) {
    setName(e.target.value);  }
  
  
    
  return (    
    <div  className="App">               
      <div  className='wine'>    
    <div className='header'>
      <img className='logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/520-grapes.svg/2048px-520-grapes.svg.png' alt='grape'></img>
      <label htmlfor="name">Name:</label>
      <input type="text" name="name" placeholder='write your name...' onChange={onChange}/>
    </div>
    <Link  href='/honey'>
  <button className='submit'><img className='notes' src='https://www.nicepng.com/png/full/50-506482_download-svg-download-png-emoji-notas-musicales-png.png'width="30" height="30" alt="musicNote"></img></button>
</Link>
    <Route path="/honey">     
      <div className='footer'>
      <RedRedWine/>         
      <h4><span>{name}</span> i love u, please comeback!</h4>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/Kfaul5VDvtc?autoplay=1&mute=0&start=8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> 
      <img className='pp' src="https://cdn.iconscout.com/icon/premium/png-256-thumb/play-pause-3523868-2948204.png" width="100"></img>
      <div className='blocker'></div>
      <div className='blocker2'></div>
      </div>
      <Link  href='/'>
  <button className='close'><img className='notes' src='https://cdn-icons-png.flaticon.com/512/16/16259.png'width="30" height="30" alt="musicNote"></img></button>
</Link>    
    </Route>
    </div> 
      
    </div>
  );
}


export default App;
