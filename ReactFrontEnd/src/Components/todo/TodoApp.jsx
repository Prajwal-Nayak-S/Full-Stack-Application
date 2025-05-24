
import './TodoApp.css'
import { BrowserRouter,Routes,Route, Navigate} from 'react-router-dom';
import HeaderComponent from './HeaderComponent';
import LogoutComponent from './LogoutComponent';
import TodoComponent from './TodoComponent';
import ErrorComponent from './ErrorComponent';
import WelcomeComponent from './WelcomeComponent';
import LoginComponent from './LoginComponent';
import AuthProvider, { useAuth } from './Security/AuthContext';
import AddTodo from './AddTodo';

export default function TodoApp(){

    function AUthenticateRoute({children}){
        const authContext=useAuth();
        if(authContext.isAuthenticated){
            return children
        }
        else{
            return <Navigate to='/'></Navigate>
        }
    }
    return(
        <div>  
<AuthProvider>
<BrowserRouter>
<HeaderComponent/>
<Routes>
     <Route path='/' element={<LoginComponent/>}/>
    <Route path='/login' element={<LoginComponent/>}/>
    <Route path='/welcome/:username' element={
        <AUthenticateRoute>
        <WelcomeComponent/>
        </AUthenticateRoute>}
        />
    <Route path='/todos' element={
        <AUthenticateRoute><TodoComponent/></AUthenticateRoute>}/>
         <Route path='/todo/:id' element={
        <AUthenticateRoute><AddTodo/></AUthenticateRoute>}/>
    <Route path='*' element={<ErrorComponent/>}/>
    <Route path='/logout' element={<LogoutComponent/>}/>
</Routes>
</BrowserRouter>
</AuthProvider>

        </div>
    )
}





