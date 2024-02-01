import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const navigate = useNavigate();

  const loginHandle =async()=>{
    let result = await fetch("http://localhost:5000/api/login",{
      method:'post',
      body:JSON.stringify({email,password}),
      headers:{
        "Content-Type": "application/json",
      }
    })
    result = await result.json();
    if(result)
    {
      localStorage.setItem("userEmail",email);
      localStorage.setItem("authToken",result.auth);
      console.log(localStorage.getItem("authToken"));
      navigate('/');
    }
    else{
      alert("Please enter correct details")
    }
  }


  return (
    <div className="register">
    <h2 className="header">Login</h2>
    <input type="email" className="input-box" id="email_box" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
    <input type="password" className="input-box" id="password_box" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
    <button id="btn" onClick={loginHandle}>Login</button>
    <p className="login">
    Dont't have an account ? <Link to="/signup">Register</Link>
    </p>
   </div>
  )
}
