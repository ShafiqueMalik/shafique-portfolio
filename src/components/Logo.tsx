import Link from "next/link";
import React from "react";
import { FaCode } from "react-icons/fa";
import { twMerge } from "tailwind-merge";

type LogoProps = {
  light?: boolean;
  className?: string;
};
function Logo({ light = false, className }: LogoProps) {
  return (
    <Link href={`#home-section`}>
      <div
        className={twMerge(
          `flex gap-2 items-center text-primary text-xl  font-bold `,
          light && "text-white",
          className
        )}
      >
        <FaCode />
        <span>Malik</span>
      </div>
    </Link>
  );
}

export default Logo;
