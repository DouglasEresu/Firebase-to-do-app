import React from 'react';
import './App.css';
import Todo from './features/Todos/Todos';
import GetTodo from './features/Todos/getTodo';
import GetTodos from './features/Todos/getTodos';

function App() {
  return (
    <div className="App">
      <Todo/>
       <GetTodo/>
       <GetTodos/>
      </div>
  );
}

export default App;
