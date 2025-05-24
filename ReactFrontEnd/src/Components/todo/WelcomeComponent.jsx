import { Link,useParams } from "react-router-dom";
import { useState } from "react";
import { retriveHelloWorldBean, retriveHelloWorldVariable } from "./api/HelloWorldRestApi";
function WelcomeComponent(){
    const{username}=useParams();
    const[message,setMessage]=useState('');
    function callHelloworldApi(){ 

     retriveHelloWorldVariable('prajwal')
        .then((response)=>{
             console.log(response)
            SuccessFullResponse(response)
        })
        .catch((error)=>{
            ErrorResponse(error)
        })
        .finally(()=>{
            console.log('cleanup!....')
        })

    }

    function SuccessFullResponse(response){
        console.log(response)
        setMessage(response.data.message)
    }
    function ErrorResponse(error){
        console.log(error)
    }
    return(
        <div className='container'>
            <h1>Welcome to {username}</h1>
            <div>Welcome Guys!...</div>
            Manage Your-<Link to='/todos'>Todos</Link>
            <div>
                <button className="btn btn-success m-5"  onClick={callHelloworldApi}>Call helloworld</button>
            </div>
            <div className="text-info m-5">
            {message}
            </div>
            </div>
         
        
          
    )
}
export default WelcomeComponent