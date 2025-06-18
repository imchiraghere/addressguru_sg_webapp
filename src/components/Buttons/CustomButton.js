import React, { useState } from "react";

const CustomButton = ({
  showToggle = false,
  defaultText = "SHOW NUMBER",
  toggledText = "+91-9897216785",
  icon = null,
  toggledIcon = null,
  bgColor = "#fff",
  toggledBgColor = "#FF6E04",
  textColor = "#FF6E04",
  toggledTextColor = "#fff",
  borderColor = "#FF6E04",
  toggledBorderColor = "#FF6E04", // New prop for toggled state
  borderWidth = "1px",
  borderStyle = "solid",
  width = "auto",
  height = "35px",
  fontSize = "14px",
  padding = "8px 12px",
  fontWeight = 500,
  borderRadius = "6px",
  onClick = null,
}) => {
  const [toggled, setToggled] = useState(false);

  const handleClick = () => {
    if (showToggle) setToggled(!toggled);
    if (onClick) onClick();
  };

  const isToggled = toggled && showToggle;

  return (
    <button
      onClick={handleClick}
      style={{
        backgroundColor: isToggled ? toggledBgColor : bgColor,
        color: isToggled ? toggledTextColor : textColor,
        border: `${borderWidth} ${borderStyle} ${isToggled ? toggledBorderColor : borderColor}`,
        width,
        height,
        padding,
        fontSize,
        fontWeight,
        borderRadius,
        display: "flex",
        alignItems: "center",
        gap: "8px",
        cursor: "pointer",
      }}
    >
      {isToggled ? toggledIcon : icon}
      {showToggle ? (isToggled ? toggledText : defaultText) : defaultText}
    </button>
  );
};

export default CustomButton;
