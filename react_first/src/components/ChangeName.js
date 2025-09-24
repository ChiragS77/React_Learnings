import { useState } from "react";

function ChangeName(){
    const [name,chgName] = useState("Chirag");

    const [age,chgAge] = useState(24);


    return (
        <div>
         <h2>My name is {name} and my age is {age}</h2>
        <button onClick={()=>chgName("Saloni")}>Change Name</button>
        <button onClick={()=>chgAge(20)}>Change Age</button>
        </div>
      
    );

}

export default ChangeName;