"use client";
import { navigationData } from "@/data/appData";
import Link from "next/link";
import React from "react";
import { Link as ScrollLink } from "react-scroll";

type SideMenuClientProps = {
  onClose: () => void;
};
function SideMenuClient({ onClose }: SideMenuClientProps) {
  return (
    <>
      <ul>
        {navigationData.map((item, index) => (
          <li key={item.sectionId}>
            <ScrollLink
              onClick={onClose}
              to={item.sectionId}
              activeClass="bg-primary/10 text-secondary"
              spy={true}
              smooth={true}
              offset={-90}
              duration={500}
              className="flex items-center gap-4 p-3 text-gray-700 hover:bg-primary/10 
                  hover:text-secondary cursor-pointer rounded-md"
            >
              <item.icon className="text-xl" />
              {item.text}
            </ScrollLink>
          </li>
        ))}
      </ul>
    </>
  );
}

export default SideMenuClient;
