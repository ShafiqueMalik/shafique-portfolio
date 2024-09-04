import React from "react";
import Logo from "../Logo";
import { navigationData } from "./data";
import HireMeButton from "../HireMeButton";
import Container from "../layout/Container";

function Navbar() {
  return (
    <div className="h-16 shadow">
      <Container className="flex justify-between items-center">
        <Logo />
        <ul className="flex items-center ">
          {navigationData.map((item) => (
            <li key={item.text} className="">
              <a
                href="#"
                className="px-4  py-5 flex text-primary hover:text-primary-light"
              >
                {item.text}
              </a>
            </li>
          ))}
        </ul>
        <HireMeButton />
      </Container>
    </div>
  );
}

export default Navbar;
