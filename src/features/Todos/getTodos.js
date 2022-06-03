import { collection, getDocs } from "firebase/firestore"; 
import { db } from "../../config/firebaseconfig";

const GetTodos = () => {
  
    const collectionRef = collection(db, "to-do")
    getDocs(collectionRef).then((response) =>{
      console.log(
        response.docs.map((item)=>{
          return {...item.data(), id: item.id}
        })
      )
    })
  
  return(
    <div className= 'getTodos'>
 <button 
 onClick={GetTodos} 
 type="submit">View Todos</button>
    </div>
)

}
export default GetTodos