import React from "react";

const Form = ({
  targetElement,
  tooltipText,
  textSize,
  padding,
  textColor,
  backgroundColor,
  cornerRadius,
  tooltipWidth,
  arrowWidth,
  arrowHeight,
  handleInputChange,
}) => {
  return (
    <div className="form-container" style={{ margin: "20px 30px", width: "643px", height: "612px", border: "1px solid #00000026", padding: "20px" }}>
      <form>
        <div className="form-group">
          <label htmlFor="targetElement">Target Element:</label>
          <select
            id="targetElement"
            name="targetElement"
            value={targetElement}
            onChange={(e) => handleInputChange("targetElement", e.target.value)}
          >
            <option value="button1">Button 1</option>
            <option value="button2">Button 2</option>
            <option value="button3">Button 3</option>
            <option value="button4">Button 4</option>
            <option value="button5">Button 5</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="tooltipText">Tooltip Text</label>
          <br />
          <input
            type="text"
            id="tooltipText"
            name="tooltipText"
            value={tooltipText}
            onChange={(e) => handleInputChange("tooltipText", e.target.value)}
          />
        </div>
        <div className="form-group">
          <label style={{ display: "block" }} htmlFor="textSize">
            Text Size:
          </label>
          <input
            style={{ display: "inline-block", width: "100px" }}
            type="text"
            id="textSize"
            name="textSize"
            value={textSize}
            onChange={(e) => handleInputChange("textSize", e.target.value)}
          />
          <label style={{ display: "block" }} htmlFor="padding">
            Padding:
          </label>
          <input
            style={{ display: "inline-block", width: "100px" }}
            type="text"
            id="padding"
            name="padding"
            value={padding}
            onChange={(e) => handleInputChange("padding", e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="textColor">Text Color:</label>
          <br />
          <input
            type="color"
            id="textColor"
            name="textColor"
            value={textColor}
            onChange={(e) => handleInputChange("textColor", e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="backgroundColor">Background Color:</label>
          <br />
          <input
            type="color"
            id="backgroundColor"
            name="backgroundColor"
            value={backgroundColor}
            onChange={(e) => handleInputChange("backgroundColor", e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="cornerRadius">Corner Radius:</label>
          <br />
          <input
            type="text"
            id="cornerRadius"
            name="cornerRadius"
            value={cornerRadius}
            onChange={(e) => handleInputChange("cornerRadius", e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="tooltipWidth">Tooltip Width:</label>
          <br />
          <input
            type="text"
            id="tooltipWidth"
            name="tooltipWidth"
            value={tooltipWidth}
            onChange={(e) => handleInputChange("tooltipWidth", e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="arrowWidth">Arrow Width:</label>
          <br />
          <input
            type="text"
            id="arrowWidth"
            name="arrowWidth"
            value={arrowWidth}
            onChange={(e) => handleInputChange("arrowWidth", e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="arrowHeight">Arrow Height:</label>
          <br />
          <input
            type="text"
            id="arrowHeight"
            name="arrowHeight"
            value={arrowHeight}
            onChange={(e) => handleInputChange("arrowHeight", e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default Form;
