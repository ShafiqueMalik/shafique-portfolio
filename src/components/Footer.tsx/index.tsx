import React from 'react';
import Logo from '../Logo';
import Container from '../layout/Container';
import Flex from '../layout/Flex';
import { navigationData } from '@/data/appData';

function Footer() {
  return (
    <div className=" pt-5 md:pt-10">
      <div
        className="bg-primary text-white py-5 md:py-14 pt-10 md:pt-20 dark:bg-dark-light"
        style={{
          clipPath: 'polygon(0 26%, 100% 0, 100% 100%, 0% 100%)',
        }}
      >
        <Container sm>
          {/* Footer for Desktop */}
          <div className="hidden md:block">
            <Flex className=" justify-center">
              <Logo light className="text-3xl" />
            </Flex>
            <Flex as="ul" className="items-center justify-center text-gray-300">
              {navigationData
                .filter((item) => item.text !== 'Home')
                .map((item) => (
                  <li key={item.text} className="">
                    <a
                      href={`#${item.sectionId}`}
                      className="px-4  py-5 flex hover:text-secondary "
                    >
                      {item.text}
                    </a>
                    {/* <item.icon className="text-xl" /> */}
                  </li>
                ))}
            </Flex>
          </div>
          {/* Footer for mobile */}
          <div className="md:hidden items-center flex justify-between">
            <div>
              <Flex className=" justify-center">
                <Logo light className="text-3xl" />
              </Flex>
            </div>
            <div>
              <h5 className="text-2xl text-center font-medium">Menu</h5>
              <Flex as="ul" className="items-center flex-col justify-center text-gray-300">
                {navigationData.map((item) => (
                  <li key={item.text} className="">
                    <a
                      href={`#${item.sectionId}`}
                      className="px-4  py-1 flex hover:text-secondary "
                    >
                      {item.text}
                    </a>
                    {/* <item.icon className="text-xl" /> */}
                  </li>
                ))}
              </Flex>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Footer;
