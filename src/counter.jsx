import { useState } from "react";   
function Counter(){
    const[Count, setCount]= useState (0);

      let message = "Normal";
            if (Count < 1){
                message = "too low";
            } else if (Count >= 10){
                message = "too high";
            }

    return(
        <div>
            <h1 style={{color:  Count < 0 ?"red":
            Count >= 10 ? "orange": "green"}}>counter app</h1>

            <h3>The count is {message}</h3>
            <h2>{Count}</h2>
            <button onClick ={()=> setCount(Count + 1)}>Increase</button>
            <button onClick={()=> setCount(Count>0 ? Count - 1 : 0)}>Decrease</button>
            <button onClick={()=>setCount(0)}>Reset</button>
        </div>
    )
}
export default Counter;