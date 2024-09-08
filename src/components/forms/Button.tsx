// src/components/Button.tsx
import React from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  rounded?: boolean;
  primary?: boolean;
  outlined?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  rounded = false,
  primary = false,
  outlined = false,
  className = "",
  children,
  ...props
}) => {
  // Base button styles
  let baseStyles =
    "px-4 py-2 font-semibold text-sm focus:outline-none transition-all duration-300";

  // Conditional styles based on props
  let variantStyles = "";

  if (primary) {
    variantStyles = outlined
      ? "border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-white dark:border-white dark:hover:text-white dark:text-white dark:hover:bg-secondary-light"
      : "bg-primary text-white hover:bg-primary-dark hover:text-white  dark:bg-secondary dark:hover:bg-secondary-dark";
  } else {
    variantStyles = outlined
      ? "border-2 border-gray-300 text-gray-700 bg-transparent"
      : "bg-gray-200 text-gray-700";
  }

  const roundedStyles = rounded ? "rounded-full" : "rounded-md";

  // Combine all styles using twMerge
  const buttonClasses = twMerge(
    baseStyles,
    variantStyles,
    roundedStyles,
    className
  );

  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;
