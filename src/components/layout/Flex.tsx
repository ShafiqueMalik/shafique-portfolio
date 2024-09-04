import React, { ElementType } from "react";
import { twMerge } from "tailwind-merge";

type FlexProps = {
  children: React.ReactNode;
  className?: string;
  as?: ElementType;
};
function Flex({ children, className, as: Tag = "div" }: FlexProps) {
  return <Tag className={twMerge(`flex `, className)}>{children}</Tag>;
}

export default Flex;
