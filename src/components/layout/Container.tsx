import React from "react";
import { twMerge } from "tailwind-merge";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  sm?: boolean;
};
function Container({ children, className, sm }: ContainerProps) {
  return (
    <div className={twMerge(`w-full max-w-[1200px] px-6 mx-auto `, sm && `max-w-[900px]`, className)}>
      {children}
    </div>
  );
}

export default Container;
