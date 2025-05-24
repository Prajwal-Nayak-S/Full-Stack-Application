import { useEffect, useState } from "react";
import { deleteTodoApi, retriveTodoDetailsApi } from "./api/TodoApiService";
import { useAuth } from "./Security/AuthContext";
import { useNavigate } from "react-router-dom";
function TodoComponent(){
   const authContext= useAuth();
     const[todos,setTodos]=useState([]);
     const[message,SetMessage]=useState(null)
    const navigate= useNavigate()
  useEffect(()=>refreshTodos(),[])
    function refreshTodos(){
        retriveTodoDetailsApi(authContext.username)
        .then(response=>{
            console.log(response)
            setTodos(response.data)
        })
        .catch(error=>{
            console.log(error)
        })
    }
    function deleteTodo(id){
    console.log("clicked");
   deleteTodoApi(authContext.username,id)
   .then(
    ()=>{
        SetMessage( `Delete of Todo with ${id} succesfull`)
         refreshTodos()
    }
   )
   .catch(
    (error)=>console.log(error)
   )

}
 function updateTodo(id){
    console.log("clicked update");
    navigate(`/todo/${id}`)

}
function addTodo(){
    console.log("clicked Add Todo")
    navigate('/todo/-1')
}

return(
        <div className='container'>
        <h1>Things You Want To do</h1>
      {message&& <div className="alert alert-warning">{message}</div>}
    <table className='table'>
        <thead>
            <tr> 
                <th>name</th>
                <th>Description</th>
                <th>IsDone</th>
                <th>TargetDate</th>
                <th>Delete</th>
                <th>Update</th>
            </tr>
        </thead>
        <tbody>
            {
                todos.map(
                    todo=>(
                        <tr key={todo.id}>
            
                        <td>
                            {todo.username}
                        </td>
                        <td>
                            {todo.description}
                        </td>
                        <td>
                            {todo.done.toString()}
                        </td>
                        <td>
                           {todo.targetDate.toString()}
                        </td>
                        <td>
                            <button className="btn btn-warning" onClick={()=>deleteTodo(todo.id)}>Delete</button>
                        </td>
                         <td>
                            <button className="btn btn-success" onClick={()=>updateTodo(todo.id)}>Update</button>
                        </td>

                        </tr>
                    )
                )
            }
        </tbody>
    </table>
    <button className="btn btn-success m-5" onClick={addTodo}>Add Todo</button>
    </div>
    )
    
}
export default TodoComponent