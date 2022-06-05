import { useState } from "react";
import { doc,  deleteDoc } from "firebase/firestore"; 
import { db } from "../../config/firebaseconfig";

const DeleteTodo = () => {
  
    const [input, setInput] = useState("");
  
    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInput(prev => ({...prev, [name]: value}))
    }

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(input.id);
    
  }


    async function deleteTodo(data){
       const delDoc = doc(db, "to-do", input.id)
    deleteDoc(delDoc)
    .then(() =>{
     alert(`to-do deleted`)
        })
      .catch((err)=>{
          alert(err.message)
      })
    
    }
        
  
  return(
    <div className= 'deleteTodo'>
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
        <input type="submit" onClick={deleteTodo} value="Delete Todo" /> 
        </form>
    </div>
)

}
export default DeleteTodo