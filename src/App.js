import React from 'react';
import './App.css';
import Navigation from './Navigation/index';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Home';
import Todo from './features/Todos/Todos';
import GetTodo from './features/Todos/getTodo';
import GetTodos from './features/Todos/getTodos';
import Signup from './features/auth.js/signUp';
import Login from './features/auth.js/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
    <Navigation/>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route index element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/getTodos" element={<GetTodos />} />
      <Route path="/getTodo" element={<GetTodo />}></Route>
      </Routes>
    </BrowserRouter>
      </div>
  );
}

export default App;
