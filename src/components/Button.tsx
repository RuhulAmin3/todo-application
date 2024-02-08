import React from "react";

type ButtonPropType = {
  children: React.ReactNode | React.ReactElement | string;
  onClick?: () => void;
  className?: string;
  type: "submit" | "button";
};

const Button: React.FC<ButtonPropType> = ({
  children,
  onClick,
  className,
  type,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
