import React,{useState} from "react";

function InputField(){

    const [name,setName] = useState("");


    return(
        <div>
            <h2 style={{color:"plum"}}>{name}</h2>
            <input style={{padding:"5px", border:"1px solid red", outlineColor:"yellowgreen"}} type="text" value={name} placeholder="Enter text here"
            onChange={(e)=>setName(e.target.value)}></input>
        </div>
    );
}
export default InputField;