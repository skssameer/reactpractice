import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(<h1 style ={{color :"green"}}>hello world!</h1>, document.getElementById("root"));

const myElement = (
    <table>
        <tr>
            <td>name</td>
        </tr>
        <tr>
            <td>moble</td>
        </tr>
        <tr>
            <td>address</td>
        </tr>
    </table>
    
);
ReactDOM.render(myElement, document.getElementById("root1"));
const x = 10;
const elem = <h1 style = {{color : "blue"}}> {x<10 ? "Hello" : "goodby"}</h1>;
ReactDOM.render(elem, document.getElementById("root1"));
let d = new Date();
const h = d.getHours();
let f;
function myFunction(){
if(h<12){
f="good morning";
}
else if(h<18){
    f="good afternoon";
}
else{
    f = "good evening";
}
return(f);
}

ReactDOM.render(myFunction(), document.getElementById("root1"));
