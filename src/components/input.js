import React, {useState} from "react";

function Input({onCitySubmit}) { // I bring the fetchData from App

  const [city, setCity] = useState("");

  const handleChange = (event) => {
    setCity(event.target.value);
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    onCitySubmit(city);  // I call the function passed from the App to submit city
    setCity(""); // I clear the input field for the user 
    
  };

    return (
      <form onSubmit={handleSubmit} className="inputContainer">
          <div className="inputLittleContainer">
            <i className="fa-solid fa-magnifying-glass" onClick={handleSubmit}
              style={{ cursor: 'pointer', marginLeft: '5px' }} />
            <input className="input" value={city} onChange={handleChange} placeholder="Enter a city"></input>
            <i className="fa-solid fa-microphone"/>
            <i className="fa-solid fa-camera"/>
          </div>
          </form>
    );
}

export default Input;