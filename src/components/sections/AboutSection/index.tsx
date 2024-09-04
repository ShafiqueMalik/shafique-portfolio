import React from "react";
import Container from "../../layout/Container";
import Text from "../../texts/Text";
import Flex from "../../layout/Flex";
import Image from "next/image";
import Button from "../../forms/Button";
import { MdOutlineFileDownload } from "react-icons/md";
import { socialData } from "@/data/appData";
import SocialIcons from "@/components/SocialIcons";
import { APP_IMAGES } from "../../../../public/assets/images";

function AboutSection() {
  return (
    <div className=" flex items-center relative">
      <div className="   grid grid-cols-[40%_1fr]">
        <div className=" min-h-[calc(80vh)] flex justify-end items-center bg-primary  pt-20 ">
          <Image
            src={APP_IMAGES.malik}
            alt="Shafique Malik"
            width={400}
            height={500}
            loading="eager"
            className="  bg-gray-300 border-[5px] border-gray-100 w-[40%] h-[70%] translate-x-[60px]"
          />
        </div>
        <Flex className="h-full gap-5 sm:gap-10 pl-[100px]  pt-20 ">
          <Flex className="flex-col justify-center max-w-[80%]">
            <div className="max-w-[244px] whitespace-nowrap">
              <Text variant="primary" className="">
                My Self
              </Text>
              <Text
                as="h1"
                variant="secondary"
                className="text-[35px] leading-none"
              >
                Shafique Malik
              </Text>
            </div>
            <Text className="mt-5">
              I'm a professional Front End Developer based in Pakistan Lahore. I
              describe myself as a developer who loves coding, open source, and
              the web platform. Currently I'm working at a company called
              Systems Ltd, as a Front End (ReactJS) Engineer.
            </Text>
            <div className="mt-5 italic space-y-2 md:mt-10">
              <Flex className="items-center gap-3 sm:gap-5">
                <span className="font-bold">Name:</span>
                <span>Shafique Malik</span>
              </Flex>
              <Flex className="items-center gap-3 sm:gap-5">
                <span className="font-bold">Phone:</span>
                <span>+923111323500</span>
              </Flex>
              <Flex className="items-center gap-3 sm:gap-5">
                <span className="font-bold">Email:</span>
                <span>imshafiqmalik@gmail.com</span>
              </Flex>
            </div>
            <SocialIcons
              className="gap-5 mt-10 [&>*]:bg-secondar"
              iconClassName="text-white "
              rounded
            />
          </Flex>
        </Flex>
      </div>
    </div>
  );
}

export default AboutSection;
