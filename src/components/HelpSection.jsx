import React from "react";
import arrowImage from "../assets/arrow-right-line.svg"

const HelpSection = () => {

    return(
        <div className="help-section-container flex-container">
            <h1 className="big-title">How can we help?</h1>
            <form action="" className="flex-container">
                <input type="search" placeholder="Search" className="search-input" />
                <button className="button search-button"><img className="img-icon" src={arrowImage} alt="" /></button>
            </form>
            
            
        </div>
    );
}

export default HelpSection;