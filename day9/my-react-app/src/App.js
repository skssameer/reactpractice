import React from "react";
//import ReactDOM from "react-dom";
import { useState } from "react";

function Ginti(){
    const [count, setCount] = useState(0);
    //const [count1 , setCount1] = useState(0)

    function increase(){

setCount(count + 1);
//setCount1(count1 - 1);
}
function decrease(){
setCount(count - 1);
}

return(
<div className="container">
    <h1>{count}</h1>
    <button onClick={increase}>+</button>
    <button onClick={decrease}>-</button>


</div>
);
}
export default Ginti;