"use client";
import "./page.css";

export default function App() {
    function calc() {
        const x = document.getElementById("x").value;
        const y = document.getElementById("y").value;
        const result = document.getElementById("result");

        result.value = parseInt(x) + parseInt(y);
    }
    
    return (
        <>
            <div class="calc">
            <input id="x"/>
            <input id="y"/>
            <input id="button" type="button" value="계산" onClick={calc}/>
            <input id="result"/>
            </div>
        </>
    );
}