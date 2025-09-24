import { react ,useState } from "react";

function NameForm(){

    const [name,setName] = useState("");

    return(
        <div>
            <h2>Hello {name || "stranger"} 👋</h2>
            <input 
                value = {name}
                placeholder="Enter your name"
                type="text"
                onChange = {(e)=> setName(e.target.value)} />

        </div>
    )
}

export default NameForm;