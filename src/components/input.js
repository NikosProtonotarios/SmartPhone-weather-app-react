import React from "react";

function Input() {
    return (
        <div className="inputContainer">
          <div className="inputLittleContainer">
            <i class="fa-solid fa-magnifying-glass"/>
            <input className="input"></input>
            <i class="fa-solid fa-microphone"/>
            <i class="fa-solid fa-camera"/>
          </div>
        </div>
    );
}

export default Input