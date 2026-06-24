import { useState } from "react";

function ChangeName(){
    const [name,setName] = useState("chirag");

    return(
        <>
            <h3>{name}</h3>

            <button onClick={()=>{
                setName("Saloni Dubey Raj")
            }}>Change</button>
        </>
    )
}

export default ChangeName;
