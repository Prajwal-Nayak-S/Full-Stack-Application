import { useState } from 'react';
import './Counter.css';
import CounterComponent from './CounterComponent';

export default function Counter(){
 const[count,setcount]=useState(0);
 function incrementparent(by){
    setcount(count+by)
 }
 function decrementparent(by){
    setcount(count-by)

 }
 function reset(){
   setcount(0)
 }

    return(
        <div>
             <span className="count">{count}</span>
         <CounterComponent by={1} increment={incrementparent} decrement={decrementparent} />
         <CounterComponent by={2} increment={incrementparent} decrement={decrementparent}/>
          <CounterComponent by={3} increment={incrementparent} decrement={decrementparent}/> 
         <div>
            <button className='reset' onClick={reset}>reset</button>
         </div>
          </div>
    )

}





