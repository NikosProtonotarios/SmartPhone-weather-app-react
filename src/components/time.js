import React from "react";

function Time() {
    return (
        <div className="timeContainer">
            <div className="discordContainer">
                <p>11:30</p>
                <i class="fa-brands fa-discord"></i>
            </div>
            <div className="batteryContainer">
                <i class="fa-solid fa-volume-low"></i>
                <i class="fa-solid fa-signal"></i>
                <i class="fa-solid fa-wifi"></i>
                <i class="fa-solid fa-battery-half"></i>
            </div>
        </div>
    );
}

export default Time