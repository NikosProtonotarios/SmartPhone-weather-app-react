import React from "react";

function Footer() {
    return (
        <div className="footerContainer">
            <div className="phone1">
                <i className="fa-solid fa-phone"></i>
            </div>
            <div className="message1">
                <i className="fa-regular fa-message"></i>
            </div>
            <div className="camera1">
                <i style={{color: 'white'}} className="fa-solid fa-camera"></i>
            </div>
        </div>
    );
}

export default Footer;