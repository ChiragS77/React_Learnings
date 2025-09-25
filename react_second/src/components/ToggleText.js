import { useState } from "react";

function ToogleText(){
    const [toogle,onToogle] = useState(true);

    return(
        <div>
            <h2>{toogle?"Hello,React 😎":"GoodBye React 🐬"}</h2>
            <button onClick={()=>{onToogle(!toogle);}}>Toogle</button>
        </div>     
    )
}
export default ToogleText;