import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Todo from "./features/Todos/Todos";
import GetTodo from './features/Todos/getTodo';
import GetTodos from './features/Todos/getTodos';
// import { db } from "./config/firebaseconfig";
import { getAuth, onAuthStateChanged  } from "firebase/auth";

const Home = () => {

  const navigate = useNavigate();
  const [user] = useState(null);

  
  useEffect(() => {
    const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    const displayName = user.displayName;
    console.log(displayName)
    
  } else {
    console.log('User is logged out')
     navigate("/login");
  }
 
  }, [navigate, user]);

  
});

  return <div className="App">
    <h3> Welcome {user?.email} </h3>
    <div>
        New to-do: <Todo/>
    </div>
    <br/>
    <div>
        My to-dos: <GetTodos/>
    </div>
    <br/>
    <div>
        Find todo: <GetTodo/>
    </div>
    
  </div>;
};

export default Home;