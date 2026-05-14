import { useState } from "react";

function CounterApp(){

    const [count , setCount] = useState(0);

    function incCount(){
        setCount(count + 1);
    }

    function decCount(){

        if(count >0){
            setCount(count -1)
        }
    }

    return(
        <div>
            <h2>Total Count is: {count}</h2>
            <button onClick={incCount}>Increase</button>
            <button onClick={decCount}>Decrease</button>
        </div>
    );
}

export default CounterApp;