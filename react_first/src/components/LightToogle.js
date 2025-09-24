import { useState } from "react"

function LightToogle(){

    const [isOn,setIsOn] = useState(false);



    return (
        <div>
            <h2>Light is {isOn?"💡 ON":"❌ OFF"}</h2>
            <button onClick={()=> setIsOn(!isOn)}>Toggle Light</button>
        </div>
    );
}

export default LightToogle;