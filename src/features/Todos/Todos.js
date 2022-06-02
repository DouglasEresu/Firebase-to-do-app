import React, {useState} from 'react';
import { postData } from '../../services/functionServices';


const Todo = () => {

  const [input, setInput] = useState("");

    
  
    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInput(prev => ({...prev, [name]: value}))
    }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(input);
    postData(input)
    

    
  }
    return (
        <div className="todo">
          <form onSubmit={handleSubmit}>
        <label>
        <input 
         placeholder="todo"
          type="text"
          name="todo"
          value={input.todo||""}
          onChange={handleChange}
        />
      </label>
      <input type="submit" onClick={handleSubmit} value="click" /> 
      </form>
        </div>    

        
    )

  
      
}

export default Todo;
