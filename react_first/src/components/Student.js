
import React from "react";
import "./Student.css";

function Student(){
    const name = "CHirag"

 return (
    <div>
        <p className="myClass">Name:{name}</p>
        {/* This is inline css */}
        <p style={{color:"green",background:"yellow",fontSize:"medium"}}>This is my Ai gimini</p>
    </div>
 )   

}

export default Student;