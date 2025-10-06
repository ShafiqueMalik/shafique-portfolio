import React from 'react';
import Container from '../../layout/Container';
import Text from '../../texts/Text';
import Flex from '../../layout/Flex';
import Image from 'next/image';
import { APP_IMAGES } from '../../../../public/assets/images';
import FloatingInfoSection from './FloatingInfoSection';
import { MdOutlineFileDownload } from 'react-icons/md';

import SocialIcons from '@/components/SocialIcons';
import Link from 'next/link';
import Head from 'next/head';
import { getFileUrl, urlFor } from '@/lib/sanity';
import { IPortfolioData } from '@/shared/types/models';
import { PrimaryButton } from '@/shared/components/forms/PrimaryButton';
import SecondaryButton from '@/shared/components/forms/SecondaryButton';

type HeroSectionProps = {
  portfolioData: IPortfolioData;
};
async function HeroSection({ portfolioData }: HeroSectionProps) {
  const { profileImage, resume } = portfolioData || {};
  const fileUrl = resume?.asset?.url;

  return (
    <>
      <Head>
        {/* Preload the background image */}
        <link rel="preload" href={APP_IMAGES.banner} as="image" />
      </Head>

      <div
        id="home-section"
        className="scroll-mt-[64px] bg-background-light min-h-[450px] max-h-[550px] h-[50vh] mt-[64px]
       sm:h-[calc(100vh-64px)]  flex items-center relative
       dark:bg-dark-light
       "
      >
        <Container className="hidden sm:block h-full py-10" sm>
          <div
            className="h-full grid grid-cols-[1fr_1fr] lg:grid-cols-[1fr_250px_1fr] gap-5 px-10 py-16 lg:px-0 
        sm:gap-8"
          >
            <Flex className="flex-col gap-16 justify-center hidden lg:flex">
              <div>
                <Text variant="primary" className="dark:text-dark-text-light">
                  Hi, I am
                </Text>
                <Text
                  as="h1"
                  className="text-[35px]  rounded-md items-center
                    text-secondary dark:text-dark-text w-max leading-none whitespace-norap"
                >
                  {portfolioData?.firstName} {portfolioData?.lastName}
                </Text>
              </div>
              <Flex className="uppercase gap-2 items-center text-primary  dark:text-dark-text">
                <Text className="text-[40px]">{portfolioData?.experience}+</Text>
                <Flex className="flex-col font-light text-gray-400  ">
                  <Text>Years</Text>
                  <Text>Experience</Text>
                </Flex>
              </Flex>

              {/* <SocialIcons
                className="gap-5 md:gap-10 "
                iconClassName="dark:text-dark-text"
                portfolioData={portfolioData}
              /> */}
            </Flex>
            <div className="  rounded-full flex-1 flex justify-center flex-col items-center">
              {profileImage && (
                <Image
                  src={urlFor(profileImage).url()}
                  alt="Shafique Malik, Frontend Developer reactjs/nextjs"
                  width={400}
                  height={500}
                  loading="eager"
                  className="w-full min-w-[200px] rounded-full max-w-[80%] lg:max-w-[200px] bg-primary
                dark:bg-dark
                "
                />
              )}
            </div>
            <Flex className="flex-col justify-center gap-5">
              <div className="lg:hidden">
                <Text variant="primary" className="dark:text-dark-text-light">
                  Hi, I am
                </Text>
                <Text
                  as="h1"
                  className="text-[35px]  rounded-md items-center 
                   text-secondary w-max dark:text-dark-text leading-none whitespace-norap"
                >
                  {portfolioData?.firstName} {portfolioData?.lastName}
                </Text>
              </div>
              <div className="max-w-[264px] whitespace-nowrap">
                <Text as="h1" className="text-[25px] leading-none">
                  {portfolioData?.role}
                </Text>
                <Text as="p" className="font-light text-gray-400 mb-5 text-right">
                  Developer
                </Text>
              </div>

              <Flex className="gap-3 flex-col text-center  mt-5 ">
                <a href="#contact-section" className="w-full">
                  <SecondaryButton pill className="w-full">
                    Contact Me
                  </SecondaryButton>
                </a>
                <Link href={fileUrl || ''} download="Shafique Malik Resume" className="w-full">
                  <SecondaryButton pill className="w-full" outlined>
                    <MdOutlineFileDownload size={20} /> Download CV
                  </SecondaryButton>
                </Link>
              </Flex>
            </Flex>
          </div>
        </Container>

        {/* Dark Mode Background */}
        <div
          className={`absolute bg-contain  sm:hidden  inset-0 hidden dark:block sm:dark:hidden`}
          style={{
            backgroundImage: `linear-gradient(rgba(3, 30, 56, 0.7), rgba(6, 52, 97, 0.8)), url(${APP_IMAGES.banner})`,
          }}
        />
        {/* Light Mode Background */}
        <div
          className={`absolute bg-contain block sm:hidden  inset-0 dark:hidden`}
          style={{
            backgroundImage: `linear-gradient(rgba(6, 52, 97, 0.5), rgba(6, 52, 97, 0.8)), url(${APP_IMAGES.banner})`,
          }}
        />
        {/* Floating Experience Section */}
        <FloatingInfoSection portfolioData={portfolioData} />
      </div>
    </>
  );
}

export default HeroSection;
