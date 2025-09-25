import React from "react";
import { useState } from "react";
import styles from "./Counter.Module.css";
function Counter(){
    const [count,setCount] = useState(0);

    return(
        <div>
            <h2>Total count is : {count}</h2>
            <button onClick={()=>setCount(count+1)}>INCREASE</button>
            <button onClick={()=>{
                if(count>0){
                    setCount(count-1);
               }
            }}>DECREASE</button>
            <button onClick={()=>setCount(0)}>RESET</button>

        </div>
    )
}
export default Counter;