import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password , setPassword] = useState("");
    const [address , setAddress] = useState("");
    const navigate = useNavigate();

   const inputHandle = async()=>{
     let result = await fetch("http://localhost:5000/api/createuser",{
        method:'post',
        body:JSON.stringify({name,email,password,address}),
        headers:{
            'Content-Type':'application/json'
        }
     }) 
     result = await result.json();
     if(result)
     {
        navigate('/');
     }
   }


  return(
   <div className="register">
    <h2 className="header">Register</h2>
    <input type="name" className="input-box" id="name_box" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)}/>
    <input type="email" className="input-box" id="email_box" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
    <input type="password" className="input-box" id="password_box" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
    <input type="text" className="input-box" id="address_box" placeholder="Address" value={address} onChange={(e)=>setAddress(e.target.value)}/>
    <button onClick={inputHandle}  id="btn">Register</button>
    <p className="login">
     Already have an account ? <Link to="/login">Login</Link>
    </p>
   </div>
  )
}
