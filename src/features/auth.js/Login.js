import { useState,  } from "react";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const Login = () => {

    let auth = getAuth();
    let googleProvider = new GoogleAuthProvider()
  const [formData, setFormData] = useState({
    email: "",  
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(formData);
    signInWithPopup(auth, googleProvider)
    .then((response) =>{
        console.log(response.user)
    })
    .catch((err) => {
        alert(err.message)
    });
  }

  return (
    <div className="login">
      
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={handleChange}
          placeholder="enter your email"
        />
        
        <br/>
          <label htmlFor="password">password</label>
        <input
          name="password"
          type="password"
          required
          value={formData.password}
          onChange={handleChange}
          placeholder="enter your password"
        />
        <br/>
        <button type="submit">Login</button>
    
        </form>
    </div>
  );
};

export default Login;
