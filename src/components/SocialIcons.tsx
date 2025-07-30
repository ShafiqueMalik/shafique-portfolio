import { socialData } from "@/data/appData";
import React from "react";
import { twMerge } from "tailwind-merge";
import Flex from "./layout/Flex";
import { fetchSocialsData } from "@/lib/sanityDataFetching/fetchHeroData";

type SocialIconsProps = {
  className?: string;
  iconClassName?: string;
  direction?: "row" | "column";
  rounded?: boolean;
  // socials?: Record<"email" | "linkedin" | "location" | "mobile", string>;
};
function SocialIcons({
  className,
  iconClassName,
  direction,
  rounded = false,
}: SocialIconsProps) {
  const socials: any = {};
  let classes = "";
  if (rounded) {
    classes = "bg-primary p-2 rounded-full text-white";
  }
  const getSocialsUrl = (title: string) => {
    if (title?.toLowerCase() === "address") {
      return socials?.location;
    } else if (
      title?.toLowerCase() === "let's talk" ||
      title?.toLowerCase() === "mobile"
    ) {
      return socials?.mobile;
    } else if (title?.toLowerCase() === "email") {
      return socials?.email;
    } else if (title?.toLowerCase() === "linkedin") {
      return socials?.linkedin;
    }
    return "";
  };
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
            href={getSocialsUrl(item.title) || ""}
            target="_blank"
            className="text-xl relative"
            rel="noreferrer"
            aria-label={item.title}
            title={item.title}
          >
            <item.icon className={twMerge("text-secondary", iconClassName)} />
          </a>
        </li>
      ))}
    </Flex>
  );
}

export default SocialIcons;
