import React from 'react';
import './App.css';
import Todo from './features/Todos/Todos';
import GetTodos from './features/Todos/getTodos';

function App() {
  return (
    <div className="App">
      <Todo/>
       <GetTodos/>
      </div>
  );
}

export default App;
