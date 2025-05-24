export default function CounterComponent({by,increment,decrement}){
    // // const[count,setcount]=useState(0);
    // function increment1(){
    //     increment(by);
    // //    setcount(count+by);
    // }
    // function decrement1(){
    //     decrement(by)
    //     // setcount(count-by);
    // }
    return(
<div>
<div>
    <button className="counterButton" onClick={()=>{increment(by)}}>+{by}</button>
     <button className="counterButton" onClick={()=>{decrement(by)}}>-{by}</button>
</div>


</div>
    )
}