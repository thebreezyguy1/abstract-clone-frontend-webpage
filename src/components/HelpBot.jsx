import React from "react";
import questionMarkImg from "../assets/question-mark.png";

const HelpBot = () => {
  return (
    <>
      <button className="help-bot-button">
        <div className="help-bot-inner-container">
          <img
            className="small-img"
            src={questionMarkImg}
            alt="question-mark"
          />
          <p>Help</p>
        </div>
      </button>
    </>
  );
};

export default HelpBot;
