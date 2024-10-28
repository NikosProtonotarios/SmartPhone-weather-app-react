import React, { useState } from "react";
import Camera from "../sounds/camera.mp3";
import Message from "../sounds/message.mp3";
import Ring from "../sounds/ring.mp3";
import '../App.css'; // Adjusted import statement

function Footer() {
    const [isLightOn, setIsLightOn] = useState(false);

    const playSound = (sound) => {
        const audio = new Audio(sound);
        audio.play();
    };

    const handleCameraClick = () => {
        playSound(Camera);
        // Delay the light effect by 1 second
        setTimeout(() => {
            setIsLightOn(true);
            // Turn off the light effect after 1 second
            setTimeout(() => setIsLightOn(false), 1000); 
        }, 700); 
    };

    return (
        <div className="footerContainer">
            <div className="phone1" onClick={() => playSound(Ring)}>
                <i className="fa-solid fa-phone"></i>
            </div>
            <div className="message1" onClick={() => playSound(Message)}>
                <i className="fa-regular fa-message"></i>
            </div>
            <div className="camera1" onClick={handleCameraClick}>
                <i className={`fa-solid fa-camera ${isLightOn ? 'light-effect' : ''}`} style={{ color: 'white' }}></i>
            </div>
            {isLightOn && <div className="light"></div>} {/* Show light effect */}
        </div>
    );
}

export default Footer;
