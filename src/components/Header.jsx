import React from "react";
import abstractLogo from "../assets/abstract-logo.png";

const Header = () => {
    return(
        <div className="header">
            <div className="logo-container">
                <img src={abstractLogo} alt="Abstract Logo" className="logo" />
                <h1>|</h1> <a href="#" id="help-center-title">Help Center</a>
            </div>
            <div className="header-buttons">
                <button className="button submit-request">Submit a request</button>
                <button className="button sign-in">Sign in</button>
            </div>
        </div>
    );
};

export default Header;