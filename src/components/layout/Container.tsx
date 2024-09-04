import React from "react";
import { twMerge } from "tailwind-merge";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  sm?: boolean;
};
function Container({ children, className, sm }: ContainerProps) {
  return (
    <div className={twMerge(`container `, sm && `max-w-[900px]`, className)}>
      {children}
    </div>
  );
}

export default Container;
