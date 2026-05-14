import React from "react";
function Alert(){

    function callAlert(){
        alert("Button is clIcked..!");
    }

    return(
        <button onClick={callAlert}>Click Me</button>
    )

}

export default Alert;