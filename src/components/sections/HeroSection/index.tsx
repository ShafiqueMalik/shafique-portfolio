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
import SocialIcons from "@/components/SocialIcons";
import Link from "next/link";
import Head from "next/head";

function HeroSection() {
  return (
    <>
      <Head>
        {/* Preload the background image */}
        <link rel="preload" href={APP_IMAGES.banner} as="image" />
      </Head>

      <div
        id="home-section"
        className="scroll-mt-[64px] bg-background-light min-h-[250px] max-h-[550px] h-[50vh] mt-[64px]
       sm:h-[calc(100vh-64px)] flex items-center relative"
      >
        <Container className="hidden sm:block h-full py-10" sm>
          <div
            className="h-full grid grid-cols-[1fr_1fr] lg:grid-cols-[1fr_250px_1fr] gap-5 px-10 py-16 lg:px-0 
        sm:gap-8"
          >
            <Flex className="flex-col justify-between hidden lg:flex">
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
                <Text className="text-[40px]">7+</Text>
                <Flex className="flex-col">
                  <Text>Years</Text>
                  <Text>Experience</Text>
                </Flex>
              </Flex>

              <SocialIcons className="gap-5 md:gap-10" />
            </Flex>
            <div className="  rounded-full flex-1 flex justify-center flex-col items-center">
              <Image
                src={APP_IMAGES.malik}
                alt="Shafique Malik"
                width={400}
                height={500}
                loading="eager"
                className="w-full min-w-[200px] rounded-full max-w-[80%] lg:max-w-[200px] bg-primary"
              />
            </div>
            <Flex className="flex-col justify-center gap-5">
              <div className="lg:hidden">
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
              <div className="max-w-[264px] whitespace-nowrap">
                <Text as="h1" className="text-[25px] leading-none">
                  Front End & Javascript
                </Text>
                <Text
                  as="p"
                  className="font-light text-gray-400 mb-5 text-right"
                >
                  Developer
                </Text>
              </div>

              <Flex className="gap-3 flex-col text-center  mt-5 ">
                <a href="#contact-section" className="w-full">
                  <Button primary rounded className="w-full">
                    Contact Me
                  </Button>
                </a>
                <Link
                  href="/assets/ShafiqueMalik.docx"
                  download="Shafique Malik Resume"
                  className="w-full"
                >
                  <Button
                    primary
                    outlined
                    rounded
                    className="flex gap-2 w-full items-center justify-center"
                  >
                    <MdOutlineFileDownload size={20} /> Download CV
                  </Button>
                </Link>
              </Flex>
            </Flex>
          </div>
        </Container>
        <div
          className={`absolute bg-contain block sm:hidden  inset-0`}
          style={{
            backgroundImage: `linear-gradient(rgba(6, 52, 97, 0.5), rgba(6, 52, 97, 0.8)), url(${APP_IMAGES.banner})`,
          }}
        />
        {/* Floating Experience Section */}
        <FloatingInfoSection />
      </div>
    </>
  );
}

export default HeroSection;
