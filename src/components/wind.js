import React from "react";
import WindIcon from "../images/blue-wind-16544.svg";
import Humidity from "../images/2682807_drop_high_humidity_percentage_precipitation_icon.svg";

function Wind() {
    return (
        <div className="windContainer">
            <div className="wind">
                <img src={WindIcon} style={{height: '40px'}} alt=""/>
                <p style={{textShadow: '0px 0px 4px rgba(0, 0, 0, 0.6)', fontSize: '40px', margin: '0'}}>10</p>
            </div>
            <div className="humid">
                <img src={Humidity} style={{height: '40px'}}/>
                <p style={{textShadow: '0px 0px 4px rgba(0, 0, 0, 0.6)', fontSize: '40px', margin: '0'}}>30%</p>
            </div>
        </div>
    );
}

export default Wind