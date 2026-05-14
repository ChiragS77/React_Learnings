import { useState } from "react";

function LiveInput(){

    const [text,setText] = useState("");

    function handleChange(event){
        setText(event.target.value)
    }
    function clearText(event){
        setText(event.target.value = "")
    }
    return (
        <div>
            <input type="text"
                    placeholder="Enter text here"
                    value={text}
                    onChange={handleChange} />
            <p>you typed: {text}</p>
            <button onClick={clearText}>Clear</button>
        </div>
    )

}

export default LiveInput;