import React from "react";

const getVariant = (variant) => {
  switch (variant) {
    case "primary":
      return "bg-blue-500 hover:bg-blue-600";

    default:
      break;
  }
};

const Button = ({ children, variant = "primary", size = "md", ...props }) => {
  return (
    <button
      className={`py-2 px-4 rounded-full text-white focus:outline-none focus:shadow-outline mx-auto w-fit disabled:bg-gray-500 disabled:cursor-not-allowed ${getVariant(
        variant
      )} ${size === "sm" ? "text-sm" : "text-base"}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
