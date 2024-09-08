// components/ServicesSection.js
import Container from "@/components/layout/Container";
import Flex from "@/components/layout/Flex";
import Progressbar from "@/components/Progressbar";
import { backEndMainskillsData, frontEndMainskillsData } from "@/data/appData";
import {
  FaLaptopCode,
  FaReact,
  FaWordpress,
  FaServer,
  FaMapMarkedAlt,
} from "react-icons/fa";

const MySkillsSection = () => {
  return (
    <section
      id="skills-section"
      className=" scroll-mt-[64px] py-12 bg-white dark:bg-dark"
    >
      <Container className=" ">
        <p className="text-primary-light text-center dark:text-dark-text-light">
          Why Choose Me
        </p>
        <h2 className="text-4xl font-bold text-center text-secondary mb-5 md:mb-10">
          My Skills & Expertise
        </h2>
        <div className="grid grid-cols-1 mob-lg:grid-cols-[1fr_1px_1fr] gap-5 lg:gap-20 ">
          <div>
            <h4 className="text-xl font-medium lg:text-3xl text-center mb-5">
              FRONT-END SKILLS
            </h4>
            <ul className="grid grid-cols-1  md:grid-cols-2 gap-3 md:gap-6 justify-between">
              {frontEndMainskillsData.map((skill, index) => (
                <li key={skill.skill}>
                  <Flex className="justify-between text-sm">
                    <span>{skill.skill}</span>
                    <span>{skill.value}%</span>
                  </Flex>
                  <Progressbar key={index} percentage={skill.value} />
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gray-200 w-[1px]" />
          <div>
            <h4 className="text-xl font-medium lg:text-3xl text-center mb-5">
              BACK-END SKILLS (Secondary)
            </h4>
            <ul className="grid  grid-cols-1 md:grid-cols-2 gap-3 md:gap-6 justify-between">
              {backEndMainskillsData.map((skill, index) => (
                <li key={skill.skill}>
                  <Flex className="justify-between text-sm">
                    <span>{skill.skill}</span>
                    <span>{skill.value}%</span>
                  </Flex>
                  <Progressbar key={index} percentage={skill.value} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default MySkillsSection;
