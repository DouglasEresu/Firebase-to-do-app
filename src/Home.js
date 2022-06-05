import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import Todo from "./features/Todos/Todos";
import GetTodo from './features/Todos/getTodo';
import GetTodos from './features/Todos/getTodos';
import DeleteTodo from "./features/Todos/deleteTodo";
import { getAuth, onAuthStateChanged  } from "firebase/auth";
import Upload from "./Storage";

const Home = () => {

  // const navigate = useNavigate();
  const [user] = useState(null);

  
  useEffect(() => {
    const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    const displayName = user.displayName;
    console.log(displayName)
    
  } else {
    console.log('User is logged out')
    //  navigate("/login");
  }
 
  }
  // , [navigate, user]
  );

  
});

  return <div className="App">
    <h1> Welcome {user?.email} </h1>
    <div>
      <div className='d-flex justify-content-center'>
       <h3>New to-do <Todo/></h3> 
    </div>
    <br/>
    <div className="">
       <h4>My to-dos <GetTodos/></h4> 
    </div>
    <br/>
    <div className="">
       <h4>Find to-do <GetTodo/></h4> 
    </div>
    <div className="">
      <h4>Delete to-do <DeleteTodo/></h4>
    </div>
    
    </div>
    <div className ="justify-content-lg-end">
      <br/>
      <hr/>
      <h3>Upload to storage</h3>
     <Upload/>
    </div>
    
    
    
  </div>;
};

export default Home;