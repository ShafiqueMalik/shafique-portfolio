import { RiMedalLine } from "react-icons/ri";
import { AiOutlineFileDone } from "react-icons/ai";
import { MdSupportAgent } from "react-icons/md";

import Flex from "../../layout/Flex";
import Text from "../../texts/Text";

function FloatingInfoSection() {
  return (
    <div
      className="absolute z-10 -translate-x-1/2 left-[50%] bottom-0 translate-y-1/2 shadow-2xl 
  rounded-full py-6 px-12 bg-white w-full max-w-[900px] flex justify-center divide-x-2 gap-4 sm:gap-8"
    >
      <Flex className="gap-2 items-center sm:gap-3 flex-1 justify-center">
        <div className="bg-primary p-2 rounded-full">
          <RiMedalLine className="text-white text-2xl sm:text-3xl" />
        </div>
        <Flex className="flex-col items-center">
          <Text as="p" className="text-2xl">
            7 years Job
          </Text>
          <Text as="h2" variant="primary">
            Experience
          </Text>
        </Flex>
      </Flex>
      <Flex className="gap-2 items-center sm:gap-3 flex-1 justify-center">
        <div className="bg-primary p-2 rounded-full">
          <AiOutlineFileDone className="text-white text-2xl sm:text-3xl" />
        </div>
        <Flex className="flex-col items-center">
          <Text as="p" className="text-2xl">
            100+ Projects
          </Text>
          <Text as="h2" variant="primary">
            Completed
          </Text>
        </Flex>
      </Flex>
      <Flex className="gap-2 items-center sm:gap-3 flex-1 justify-center">
        <div className="bg-primary p-2 rounded-full">
          <MdSupportAgent className="text-white text-2xl sm:text-3xl" />
        </div>
        <Flex className="flex-col items-center">
          <Text as="p" className="text-2xl">
            Support
          </Text>
          <Text as="h2" variant="primary">
            Online 24/7
          </Text>
        </Flex>
      </Flex>
    </div>
  );
}

export default FloatingInfoSection;
