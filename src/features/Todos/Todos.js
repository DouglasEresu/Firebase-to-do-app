import React, {useState} from 'react';
import { postData } from '../../services/functionServices';
// import { collection, addDoc } from "firebase/firestore"; 
// import {  db } from "../../config/firebaseconfig";

const Todo = () => {

  const [input, setInput] = useState("");

    // const collectionRef = collection(db, 'todo')

    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInput(prev => ({...prev, [name]: value}))
    }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(input);
    postData(input)
    
  //   addDoc(collectionRef, {todo: FormData.todo})
  // .then(()=>{
  //   alert('todo has been added')
  // })
  // .catch((err)=>{
  //   alert(err.message)
  // })
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
