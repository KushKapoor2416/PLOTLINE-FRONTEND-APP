import React, { useState, useEffect } from "react";

const Phone = ({ buttonStyles, targetElement, handleButtonClick, tooltipWidth, arrowWidth, arrowHeight }) => {
  const [tooltipText, setTooltipText] = useState("");
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [tooltipWidthState, setTooltipWidth] = useState(tooltipWidth);
  const [arrowWidthState, setArrowWidth] = useState(arrowWidth);
  const [arrowHeightState, setArrowHeight] = useState(arrowHeight);

  const handleButtonHover = () => {
    setTooltipVisible(true);
  };

  const handleButtonLeave = () => {
    setTooltipVisible(false);
  };

  const boxStyle = {
    position: "absolute",
    width: "280.114501953125px",
    height: "597.0038452148438px",
    top: "51.65472412109375px",
    left: "800px",
    borderRadius: "29px",
    background: "#00000040",
    boxShadow: "-1.6781489849090576px 0px 4.027557849884033px -2.517223834991455px #212121 inset, 0px -0.8390744924545288px 3.3562979698181152px 0px #212121 inset",
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
    width: "76px",
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

  const tooltipStyle = {
    position: "absolute",
    bottom: `-${parseInt(arrowHeightState) + 5}px`,
    left: "50%",
    transform: "translateX(-50%)",
    width: "181px", // Fixed width
    height: "31.4px", // Hug height
    padding: "0px 0px 0px 14px", // Padding values
    borderRadius: "3.3501803874969482px",
    border: "0.42px solid #212121", // Border values
    textAlign: "center",
    display: tooltipVisible ? "block" : "none",
    background: "#212121", // Background color
    color: "#ffffff",
  };
  

  // Dynamically update the notch of the tooltip
  const notchStyle = {
    position: "absolute",
    width: "0",
    height: "0",
    bottom: `-${arrowHeightState}`,
    left: "50%",
    transform: "translateX(-50%)",
    borderBottom: `${arrowHeightState} solid #000000`,
    borderLeft: `${arrowWidthState} solid transparent`,
    borderRight: `${arrowWidthState} solid transparent`,
  };

  // Update tooltip arrow size and arrow width when form inputs change
  useEffect(() => {
    setTooltipWidth(tooltipWidth);
    setArrowWidth(arrowWidth);
    setArrowHeight(arrowHeight);
  }, [tooltipWidth, arrowWidth, arrowHeight]);

  return (
    <div>
      <div style={{ position: "relative" }}>
        <div style={boxStyle}>
          <div style={buttonContainerStyle}>
            <button
              id="button1"
              style={topLeftButtonStyle}
              onClick={handleButtonClick}
              onMouseEnter={() => {
                setTooltipText(buttonStyles.button1["data-tooltip"]);
                handleButtonHover();
              }}
              onMouseLeave={handleButtonLeave}
            >
              <span style={buttonTextStyles}>Button 1</span>
              {targetElement === "button1" && (
                <div>
                  <div style={notchStyle}></div>
                  <div style={{ ...tooltipStyle }}>{tooltipText}</div>
                </div>
              )}
            </button>
            <button
              id="button2"
              style={topRightButtonStyle}
              onClick={handleButtonClick}
              onMouseEnter={() => {
                setTooltipText(buttonStyles.button2["data-tooltip"]);
                handleButtonHover();
              }}
              onMouseLeave={handleButtonLeave}
            >
              <span style={buttonTextStyles}>Button 2</span>
              {targetElement === "button2" && (
                <div>
                  <div style={notchStyle}></div>
                  <div style={{ ...tooltipStyle }}>{tooltipText}</div>
                </div>
              )}
            </button>
            <button
              id="button3"
              style={centerButtonStyle}
              onClick={handleButtonClick}
              onMouseEnter={() => {
                setTooltipText(buttonStyles.button3["data-tooltip"]);
                handleButtonHover();
              }}
              onMouseLeave={handleButtonLeave}
            >
              <span style={buttonTextStyles}>Button 3</span>
              {targetElement === "button3" && (
                <div>
                  <div style={notchStyle}></div>
                  <div style={{ ...tooltipStyle }}>{tooltipText}</div>
                </div>
              )}
            </button>
            <button
              id="button4"
              style={bottomRightButtonStyle}
              onClick={handleButtonClick}
              onMouseEnter={() => {
                setTooltipText(buttonStyles.button4["data-tooltip"]);
                handleButtonHover();
              }}
              onMouseLeave={handleButtonLeave}
            >
              <span style={buttonTextStyles}>Button 4</span>
              {targetElement === "button4" && (
                <div>
                  <div style={notchStyle}></div>
                  <div style={{ ...tooltipStyle }}>{tooltipText}</div>
                </div>
              )}
            </button>
            <button
              id="button5"
              style={bottomLeftButtonStyle}
              onClick={handleButtonClick}
              onMouseEnter={() => {
                setTooltipText(buttonStyles.button5["data-tooltip"]);
                handleButtonHover();
              }}
              onMouseLeave={handleButtonLeave}
            >
              <span style={buttonTextStyles}>Button 5</span>
              {targetElement === "button5" && (
                <div>
                  <div style={notchStyle}></div>
                  <div style={{ ...tooltipStyle }}>{tooltipText}</div>
                </div>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Phone;
