import React, { useContext, useState } from "react";
import UserContext from "../Context/UserContext";

function Login() {
    const [username, setusername] = useState("")
    const [password, setPassword] = useState("")

    const {setuser} = useContext(UserContext)
    const handleSubmit =(e)=>{
        e.preventDefault()
        setuser({username, password})
    }
  return (
    <div>
      <h1>This is Login page</h1>
      <input 
      type="text" 
      value={username} 
      onChange={(e)=> setusername(e.target.value)} 
      placeholder="username" />
      <input 
      type="password" 
      name="" 
      id="" 
      placeholder="password"
      value={password}
      onChange={(e)=>setPassword(e.target.value)}
      />
      <button
      onClick={handleSubmit}
      >Submit</button>
    </div>
  );
}

export default Login;
