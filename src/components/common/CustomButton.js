import React from "react";

export default function CustomButton({
  buttonName,
  buttonType = "primary",
  handleButtonClick,
  disabled = false,
}) {
  const getClasses = (type) => {
    switch (type) {
      case "primary":
        return "text-card bg-primary";
      case "secondary":
        return "text-primary border-primary";
      default:
        return "";
    }
  };
  return (
    <button
      onClick={handleButtonClick}
      className={`flex items-center justify-center py-sm px-md font-medium border-[1px] rounded-[6px] ${getClasses(
        buttonType
      )} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
      disabled={disabled}
      type="button"
    >
      {buttonName}
    </button>
  );
}
