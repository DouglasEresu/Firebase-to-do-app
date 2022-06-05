import { useState  } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import { useNavigate } from "react-router-dom";

const Signup = () => {
  //  const navigate = useNavigate()
    let auth = getAuth();
  const [formData, setFormData] = useState({
    name: "",
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
    createUserWithEmailAndPassword(auth, formData.email, formData.password)
    .then((response) =>{
        console.log(response.user)
    })
    .catch((err) => {
        alert(err.message)
    });
  }
  // useEffect(() => {
  //   if (auth) {
      
  //     navigate("/");
  //   }
    
  // }, [ navigate, auth]);
  

  return (
    <div className="signup">
      
      <form onSubmit={handleSubmit}>
      <label htmlFor="email">Name</label>
        <input
          name="name"
          type="name"
          required
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <br/>
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
        <button type="submit">SignUp</button>
    
        </form>
    </div>
  );
};

export default Signup;
