import React from 'react';
import Text from '../../texts/Text';
import Flex from '../../layout/Flex';
import Image from 'next/image';
import { urlFor } from '@/lib/sanity';
import { IPortfolioData } from '@/shared/types/models';

type AboutSectionProps = {
  portfolioData: IPortfolioData;
};
async function AboutSection({ portfolioData }: AboutSectionProps) {
  const { profileImage } = portfolioData || {};
  return (
    <div id="about-section" className="scroll-mt-[64px] flex items-center relative">
      <div className="   grid grid-cols-1 mob-lg:grid-cols-[40%_1fr]">
        <div
          className=" min-h-[calc(80vh)]  hidden mob-lg:flex  justify-end items-center bg-primary
         dark:bg-gray-800  pt-20 "
        >
          {profileImage && (
            <Image
              src={urlFor(profileImage).url()}
              alt="Shafique Malik, Frontend Developer reactjs/nextjs"
              width={400}
              height={500}
              loading="eager"
              className="  bg-secondary/70 border-[5px] border-gray-100 
            min-w-[200px] w-[40%] h-[70%] sm:translate-x-[60px] z-10"
            />
          )}
        </div>
        <Flex
          className="relative  h-full flex-col gap-5 sm:gap-10 pl-8 sm:pl-[80px] md:pl-[100px] 
          pt-40
           sm:pt-[100px]
        pb-16 sm:pb-[130px] 
        dark:bg-dark-light
        dark:border-t dark:border-gray-600
        "
        >
          <Flex className="flex-col justify-center pr-5 lg:max-w-[80%]">
            <Text
              as="h1"
              variant="secondary"
              className="text-[35px] mb-10 text-center block mob-lg:hidden leading-none dark:text-dark-text"
            >
              About Me
            </Text>
            <div className="max-w-[244px] whitespace-nowrap">
              <Text variant="primary" className="dark:text-dark-text-light">
                My Self
              </Text>
              <Text
                as="h1"
                variant="secondary"
                className="text-[35px] leading-none dark:text-dark-text"
              >
                {portfolioData?.firstName} {portfolioData?.lastName}
              </Text>
            </div>
            <Text className="mt-5 text-sm lg:text-base dark:text-dark-text-light">
              I&#39;m a professional Front End Developer based in Pakistan Lahore. I describe myself
              as a developer who loves coding, open source, and the web platform. Currently I&#39;m
              working at a company called Systems Ltd, as a Front End (React.js & Next.js)
              Developer.
            </Text>
            <div className="mt-5 italic space-y-2 md:mt-10">
              <Flex className="items-center gap-3 sm:gap-5">
                <span className="font-bold">Name:</span>
                <span>
                  {portfolioData?.firstName} {portfolioData?.lastName}
                </span>
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
          </Flex>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-0 bottom-0 right-0 w-full fill-primary dark:fill-gray-800"
            viewBox="0 0 1440 320"
          >
            <path
              fillOpacity="1"
              d="M0,224L48,208C96,192,192,160,288,165.3C384,171,480,213,576,218.7C672,224,768,192,864,186.7C960,181,1056,203,1152,186.7C1248,171,1344,117,1392,90.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </Flex>
      </div>
    </div>
  );
}

export default AboutSection;
