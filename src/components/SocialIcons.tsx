import { socialData } from "@/data/appData";
import React from "react";
import { twMerge } from "tailwind-merge";
import Flex from "./layout/Flex";

type SocialIconsProps = {
  className?: string;
  iconClassName?: string;
  direction?: "row" | "column";
  rounded?: boolean;
};
function SocialIcons({
  className,
  iconClassName,
  direction,
  rounded = false,
}: SocialIconsProps) {
  let classes = "";
  if (rounded) {
    classes = "bg-primary p-2 rounded-full text-white";
  }
  return (
    <Flex
      as="ul"
      className={twMerge(
        `gap-3 ${direction === "column" && "flex-col"}`,
        className
      )}
    >
      {socialData.map((item) => (
        <li key={item.title} className={classes}>
          <a
            href={item.link}
            target="_blank"
            className="text-xl relative"
            rel="noreferrer"
          >
            <item.icon className={twMerge("text-secondary", iconClassName)} />
          </a>
        </li>
      ))}
    </Flex>
  );
}

export default SocialIcons;
