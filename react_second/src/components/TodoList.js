import { useState } from "react";

function TodoList(){

    const [list,addValue] = useState([""]);


    return(
        <div>
            <ul>
               {list.map((list,index)=>{
                <li key={index}>{list}</li>
               })}
            </ul>
            <input type="text" placeholder="enter name here" 
            onChange={(e)=>addValue(e.target.value)} />
        </div>
    )
}
export default TodoList;