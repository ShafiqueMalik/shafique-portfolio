import React from "react";
import Logo from "../Logo";
import Container from "../layout/Container";
import Flex from "../layout/Flex";
import { navigationData } from "../Navbar/data";
import SocialIcons from "../SocialIcons";

function Footer() {
  return (
    <div className="bg-background-light pt-5 md:pt-10">
      <div
        className="bg-primary text-white py-5 md:py-14 pt-10 md:pt-20 "
        style={{
          clipPath: "polygon(0 26%, 100% 0, 100% 100%, 0% 100%)",
        }}
      >
        <Container sm>
          <Flex className=" justify-center">
            <Logo light className="text-3xl" />
          </Flex>
          <Flex as="ul" className="items-center justify-center text-gray-300">
            {navigationData.map((item) => (
              <li key={item.text} className="">
                <a href="#" className="px-4  py-5 flex  ">
                  {item.text}
                </a>
                {/* <item.icon className="text-xl" /> */}
              </li>
            ))}
          </Flex>
          <SocialIcons
            className="justify-center gap-5 md:gap-10 mt-5 [&>li]:bg-gray-100
             [&>li]:text-primary [&>li]:shadow-sm [&>li]:shadow-gray-300 "
            iconClassName="text-primary"
            rounded
          />
        </Container>
      </div>
    </div>
  );
}

export default Footer;
