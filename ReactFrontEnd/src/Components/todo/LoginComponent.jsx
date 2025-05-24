import { useNavigate } from "react-router-dom";
import {  useState } from 'react'
import { useAuth } from "./Security/AuthContext";
function LoginComponent(){
    const authContext=useAuth();
const[name,setname]=useState('');
const[password,setpassword]=useState('');
const[ShowErrorMessage,SetShowErrorMessage]=useState(false);
const navigate=useNavigate();
function handlenamechange(event){ 
   setname(event.target.value)
}
function handlePasswordChange(event){
    setpassword(event.target.value);
}
function handleSubmit(event){
  
   if(authContext.login(name,password)){
     SetShowErrorMessage(false);
     navigate(`/welcome/${name}`);
   }
   else{
    SetShowErrorMessage(true);
   }
}
    return(
    <div className="Login">
<div className="LoginForm">
    <h1>Time to Login</h1>
   {ShowErrorMessage&&<div className='Error'>Credentials Wrong try Again</div>}
<div>
    <label>Username</label>
    <input type="text" name="username" value={name} onChange={handlenamechange}/>
</div>
<div>
    <label>Password</label>
    <input type="password" name="password" value={password} onChange={handlePasswordChange}/>
</div>
<div>
    <button type="submit" onClick={handleSubmit}>Login</button>
</div>
</div>
</div>)
}
export default LoginComponent