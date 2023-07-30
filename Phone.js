import React from "react";

const Phone = ({ buttonStyles, targetElement, handleButtonClick }) => {
  const boxStyle = {
    position: "absolute",
    width: "280.114501953125px",
    height: "597.0038452148438px",
    top: "51.65472412109375px",
    left: "800px",
    borderRadius: "29px",
    background: "#00000040",
    boxShadow:
      "-1.6781489849090576px 0px 4.027557849884033px -2.517223834991455px #212121 inset, 0px -0.8390744924545288px 3.3562979698181152px 0px #212121 inset",
    border: "10px solid black",
  };

  const buttonContainerStyle = {
    position: "relative",
    width: "100%",
    height: "100%",
  };

  const buttonTextStyles = {
    fontFamily: "Barlow",
    fontSize: "16px",
    fontWeight: 500,
    lineHeight: "18px",
    letterSpacing: "0em",
    textAlign: "left",
  };

  const hugButtonStyle = {
    width: "73px",
    height: "34px",
    padding: "8px",
    borderRadius: "4px",
    gap: "10px",
    background: "#FFFFFF",
    fontFamily: "Barlow",
    fontSize: "16px",
    fontWeight: 500,
    lineHeight: "18px",
    letterSpacing: "0em",
    textAlign: "left",
  };

  const centerButtonStyle = {
    width: "76px", // Updated width for Button 3
    height: "34px", // Updated height for Button 3
    padding: "8px",
    borderRadius: "4px",
    gap: "10px",
    background: "#FFFFFF",
    fontFamily: "Barlow",
    fontSize: "16px",
    fontWeight: 500,
    lineHeight: "18px",
    letterSpacing: "0em",
    textAlign: "left",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    ...buttonStyles.button3,
  };

  const topLeftButtonStyle = {
    ...hugButtonStyle,
    position: "absolute",
    top: "10px",
    left: "10px",
    ...buttonStyles.button1,
  };

  const topRightButtonStyle = {
    ...hugButtonStyle,
    position: "absolute",
    top: "10px",
    right: "10px",
    ...buttonStyles.button2,
  };

  const bottomLeftButtonStyle = {
    ...hugButtonStyle,
    position: "absolute",
    bottom: "10px",
    left: "10px",
    ...buttonStyles.button5,
  };

  const bottomRightButtonStyle = {
    ...hugButtonStyle,
    position: "absolute",
    bottom: "10px",
    right: "10px",
    ...buttonStyles.button4,
  };

  return (
    <div>
      <div style={{ position: "relative" }}>
        <div style={boxStyle}>
          <div style={buttonContainerStyle}>
            <button id="button1" style={topLeftButtonStyle} onClick={handleButtonClick}>
              <span style={buttonTextStyles}>Button 1</span>
            </button>
            <button id="button2" style={topRightButtonStyle} onClick={handleButtonClick}>
              <span style={buttonTextStyles}>Button 2</span>
            </button>
            <button id="button3" style={centerButtonStyle} onClick={handleButtonClick}>
              <span style={buttonTextStyles}>Button 3</span>
            </button>
            <button id="button4" style={bottomRightButtonStyle} onClick={handleButtonClick}>
              <span style={buttonTextStyles}>Button 4</span>
            </button>
            <button id="button5" style={bottomLeftButtonStyle} onClick={handleButtonClick}>
              <span style={buttonTextStyles}>Button 5</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Phone;
