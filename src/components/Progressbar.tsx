import React from "react";
type ProgressbarProps = {
  percentage: number;
};

const Progressbar = ({ percentage }: ProgressbarProps) => {
  // Ensure percentage is between 0 and 100
  const validPercentage = Math.min(Math.max(percentage, 0), 100);

  return (
    <div className="w-full bg-blue-100 rounded-full overflow-hidden">
      <div
        className="h-2 bg-primary-light text-xs text-white flex items-center justify-center"
        style={{ width: `${validPercentage}%` }}
      ></div>
    </div>
  );
};

export default Progressbar;
