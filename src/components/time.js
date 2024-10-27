import React, {useState, useEffect} from "react";

function Time() {

    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const formattedTime = currentTime.toLocaleTimeString();

    return (
        <div className="timeContainer">
            <div className="discordContainer">
                <p>{formattedTime}</p>
                <i className="fa-brands fa-discord"></i>
            </div>
            <div className="batteryContainer">
                <i className="fa-solid fa-volume-low"></i>
                <i className="fa-solid fa-signal"></i>
                <i className="fa-solid fa-wifi"></i>
                <i className="fa-solid fa-battery-half"></i>
            </div>
        </div>
    );
}

export default Time;