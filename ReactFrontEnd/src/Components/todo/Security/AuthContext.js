// import { createContext, useState } from "react";
import { createContext, useContext, useState } from "react";

export const AuthContext=createContext();
 export const useAuth=()=>useContext(AuthContext);
                
export default function AuthProvider({children}){
    const [number,setNumber]=useState(10);
    const[username,setUsername]=useState('');
 setInterval(
    ()=>
       setNumber(number+1)
        ,10000
 )
 const[isAuthenticated,setAuthenticated]=useState(false);
 function login(name,password){
if(name==='in28minutes'&& password==='nayak'){
     setAuthenticated(true);
     setUsername(name);
     return true; 
   }
   else{
    setAuthenticated(false);
    setUsername(null);
    return false;
   }

 }
 function logout(){
    setAuthenticated(false);
 }
    return(
    <AuthContext.Provider value={{number,isAuthenticated,setAuthenticated,login,logout,username}}>
        {children}
    </AuthContext.Provider>
    )
}
