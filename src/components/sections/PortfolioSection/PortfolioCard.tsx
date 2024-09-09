import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";

type PortfolioCardProps = {
  project: any;
};
export default function PortfolioCard({ project }: PortfolioCardProps) {
  return (
    <div
      className="relative group overflow-hidden  rounded-lg shadow-lg transform transition-transform
     duration-300 hover:scale-105 dark:shadow-none dark:border dark:border-gray-500"
    >
      <Image
        src={project.thumbnail}
        alt={`${project.name} thumbnail`}
        className="w-full h-[250px] object-fill"
        loading="lazy"
        width={250}
        height={250}
      />
      <div
        className="absolute inset-0 bg-black bg-opacity-70 group-hover:bg-opacity-80 flex flex-col justify-end items-center p-5 
     opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <h3 className="text-white text-xl font-semibold mb-2 capitalize">
          {project.name}
        </h3>
        <p className="text-gray-300 text-xs mb-4 uppercase">
          {project.technologies?.join(" / ")}
        </p>
        <Link
          href={project.link}
          className="text-white underline flex items-center"
        >
          <span>Preview</span>
          <MdOutlineArrowOutward />
        </Link>
      </div>
    </div>
  );
}
