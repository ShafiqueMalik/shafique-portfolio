import { RiMedalLine } from 'react-icons/ri';
import { AiOutlineFileDone } from 'react-icons/ai';
import { MdSupportAgent } from 'react-icons/md';

import Flex from '../../layout/Flex';
import Text from '../../texts/Text';
import SocialIcons from '@/components/SocialIcons';
import Image from 'next/image';
import { urlFor } from '@/lib/sanity';
import { IPortfolioData } from '@/shared/types/models';

type FloatingInfoSectionProps = {
  portfolioData: IPortfolioData | undefined;
};
function FloatingInfoSection({ portfolioData }: FloatingInfoSectionProps) {
  const { profileImage } = portfolioData || {};

  return (
    <div
      className="absolute z-10 -translate-x-1/2 left-[50%] bottom-0 translate-y-1/2 shadow-2xl 
 w-[90vw] sm:w-full max-w-[900px] rounded-[20px] sm:rounded-full py-6 px-2 mob:px-5 
 min-[850px]:px-10 bg-white/80 sm:bg-white dark:text-dark-text  
  gap-4 sm:gap-8 dark:bg-dark/80 dark:shadow dark:shadow-gray-700"
    >
      {profileImage && (
        <Image
          src={urlFor(profileImage).url()}
          alt="Shafique Malik, Frontend Developer reactjs/nextjs"
          width={80}
          height={80}
          loading="eager"
          className="size-[80px] block sm:hidden absolute top-0 left-1/2 -translate-x-1/2 
        -translate-y-1/2 rounded-full  bg-primary
        dark:bg-dark
        "
        />
      )}
      <div className="block sm:hidden">
        <Text
          as="h1"
          className="text-[30px] text-center mb-2 
           rounded-md items-center  text-primary  mt-5 leading-none whitespace-norap
          dark:text-dark-text
           "
        >
          {portfolioData?.firstName} {portfolioData?.lastName}
        </Text>
        <Text
          as="h1"
          className="text-sm text-secondary dark:text-dark-text-light text-center  italic leading-none"
        >
          {portfolioData?.role || 'Frontend Developer'}
        </Text>
      </div>
      <div className="flex justify-center mt-6 sm:mt-0 divide-x-2">
        <Flex className="gap-2 items-center sm:gap-3 flex-1 justify-center">
          <div
            className="bg-primary text-white p-2 rounded-full  hidden min-[660px]:block
          dark:bg-primary  dark:text-dark-text 
          "
            role="img"
            aria-label="Experience"
          >
            <RiMedalLine className="  text-xl  min-[850px]:text-3xl" aria-hidden="true" />
          </div>
          <Flex className="flex-col items-center">
            <Text
              as="p"
              className="font-medium text-sm mob:text-base sm:text-xl  min-[850px]:text-2xl "
            >
              {portfolioData?.experience}+ years Job
            </Text>
            <Text
              as="h2"
              variant="primary"
              className="text-xs sm:text-base dark:text-dark-text-light"
            >
              Experience
            </Text>
          </Flex>
        </Flex>
        <Flex className="gap-2 items-center sm:gap-3 flex-1 justify-center">
          <div
            className="bg-primary text-white   p-2 rounded-full hidden min-[660px]:block
          dark:bg-primary  dark:text-dark-text
          "
            role="img"
            aria-label="Projects"
          >
            <AiOutlineFileDone className=" text-xl  min-[850px]:text-3xl  " aria-hidden="true" />
          </div>
          <Flex className="flex-col items-center">
            <Text
              as="p"
              className="font-medium text-sm mob:text-base sm:text-xl  min-[850px]:text-2xl "
            >
              {portfolioData?.completedProjects}+ Projects
            </Text>
            <Text
              as="h2"
              variant="primary"
              className="text-xs sm:text-base dark:text-dark-text-light"
            >
              Completed
            </Text>
          </Flex>
        </Flex>
        <Flex className="gap-2 items-center sm:gap-3 flex-1 justify-center">
          <div
            className="bg-primary text-white  p-2 rounded-full  hidden min-[660px]:block
          dark:bg-primary  dark:text-dark-text
          "
            role="img"
            aria-label="Support Agent"
          >
            <MdSupportAgent aria-hidden="true" className="  text-xl  min-[850px]:text-3xl " />
          </div>
          <Flex className="flex-col items-center">
            <Text
              as="p"
              className="font-medium text-sm mob:text-base sm:text-xl  min-[850px]:text-2xl "
            >
              Support
            </Text>
            <Text
              as="h2"
              variant="primary"
              className="text-xs sm:text-base dark:text-dark-text-light"
            >
              Online 24/7
            </Text>
          </Flex>
        </Flex>
      </div>

      <SocialIcons
        className="flex sm:hidden gap-5 justify-center mt-5"
        rounded
        iconClassName="text-white"
      />
    </div>
  );
}

export default FloatingInfoSection;
