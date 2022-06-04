import React from 'react';
import './App.css';
import Todo from './features/Todos/Todos';
import GetTodo from './features/Todos/getTodo';
import GetTodos from './features/Todos/getTodos';
import Signup from './features/auth.js/signUp';
import Login from './features/auth.js/Login';

function App() {
  return (
    <div className="App">
      Todos
      <Todo/>
       <GetTodo/>
       <GetTodos/>
       <hr/>

       <div>
         <br/>
         signUp
      <Signup/>
      <br/>
      <hr/>
      login
      <Login/>
       </div>
      </div>
  );
}

export default App;
