import React from "react";
import Container from "../../layout/Container";
import Text from "../../texts/Text";
import Flex from "../../layout/Flex";
import Image from "next/image";
import { APP_IMAGES } from "../../../../public/assets/images";
import Button from "../../forms/Button";
import FloatingInfoSection from "./FloatingInfoSection";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaRegHandPointRight } from "react-icons/fa";
import { socialData } from "@/data/appData";

function HeroSection() {
  return (
    <div className="bg-background-light min-h-[calc(100vh-64px)] flex items-center relative">
      <Container className="h-full py-10" sm>
        <div className="h-full grid grid-cols-[1fr_250px_1fr] gap-5 sm:gap-8">
          <Flex className="flex-col justify-between">
            <div>
              <Text variant="primary" className="">
                Hi, I am
              </Text>
              <Text
                as="h1"
                className="text-[35px]  rounded-md items-center  text-secondary w-max leading-none whitespace-norap"
              >
                Shafique Malik
              </Text>
            </div>
            <Flex className="uppercase gap-2 items-center text-primary">
              <Text className="text-[40px]">07</Text>
              <Flex className="flex-col">
                <Text>Years</Text>
                <Text>Experience</Text>
              </Flex>
            </Flex>

            <Flex as={"ul"} className="flex gap-2 sm:gap-5 md:gap-10 ">
              {socialData.map((item) => (
                <li key={item.title}>
                  <a
                    href={item.link}
                    target="_blank"
                    className="text-xl group relative"
                    rel="noreferrer"
                  >
                    <span
                      className="text-[10px] -top-[25px] bg-black rounded-full px-2 leading-[20px]  text-white left-[50%]
                     -translate-x-1/2 opacity-0 whitespace-nowrap absolute group-hover:opacity-100"
                    >
                      {item.title}
                    </span>
                    <item.icon className="text-secondary" />
                  </a>
                </li>
              ))}
            </Flex>
          </Flex>
          <div className="  rounded-full flex-1 flex justify-center flex-col items-center">
            <Image
              src={APP_IMAGES.malik}
              alt="Shafique Malik"
              width={400}
              height={500}
              loading="eager"
              className="w-full rounded-full max-w-[200px] bg-primary"
            />
          </div>
          <Flex className="flex-col justify-center">
            <div className="max-w-[264px] whitespace-nowrap">
              <Text as="h1" className="text-[25px] leading-none">
                Front End & Javascript
              </Text>
              <Text as="p" className="font-light text-gray-400 mb-5 text-right">
                Developer
              </Text>
            </div>

            <Flex className="gap-3 flex-col text-center  mt-5 ">
              <Button primary rounded>
                Contact Me
              </Button>
              <Button
                primary
                outlined
                rounded
                className="flex gap-2 items-center justify-center"
              >
                <MdOutlineFileDownload size={20} /> Download CV
              </Button>
            </Flex>
          </Flex>
        </div>
      </Container>

      {/* Floating Experience Section */}
      <FloatingInfoSection />
    </div>
  );
}

export default HeroSection;
