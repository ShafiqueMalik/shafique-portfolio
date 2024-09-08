"use client";
import { navigationData } from "@/data/appData";
import React from "react";
import { Link as ScrollLink } from "react-scroll";

function MenuListClient() {
  return (
    <ul className="hidden items-center lg:flex">
      {navigationData
        .filter((item) => item.text !== "Home")
        .map((item) => (
          <li key={item.text} className="">
            <ScrollLink
              to={item.sectionId}
              activeClass="text-secondary dark:text-secondary"
              spy={true}
              smooth={true}
              offset={-90}
              duration={500}
              className="px-3 text-xs md:px-4 md:text-base 
                 py-5 flex text-primary hover:text-secondary cursor-pointer
                 dark:text-dark-text
"
            >
              {item.text}
            </ScrollLink>
          </li>
        ))}
    </ul>
  );
}

export default MenuListClient;
