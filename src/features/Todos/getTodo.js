import React, {useState} from 'react';
import { doc, getDoc } from "firebase/firestore"; 
import { db } from "../../config/firebaseconfig";

const GetTodo = () => {

    const [input, setInput] = useState("");
  
      const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInput(prev => ({...prev, [name]: value}))
      }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(input.id);
      
    }
    async function getTodo(data){
    
      const docRef = doc(db, "to-do", input.id);
      const docSnap = await getDoc(docRef);
      const dirRef = docSnap.data()

      if (dirRef) {
        console.log("Todo:", dirRef);
        alert(`Your todo is ${dirRef.todo}`)
      } else {
        console.log("Todo not found!");
      }
      
     
    
     }
      return (
          <div className="getTodo">
            <form onSubmit={handleSubmit}>
          <label>
          <input 
           placeholder="Paste id Here"
            type="text"
            name="id"
            value={input.id||""}
            onChange={handleChange}
          />
        </label>
        <input type="submit" onClick={getTodo} value="Get Todo" /> 
        </form>
          </div>    
  
      )
        
  }

export default GetTodo;
