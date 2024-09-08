import Container from "@/components/layout/Container";
import Flex from "@/components/layout/Flex";
import Progressbar from "@/components/Progressbar";
import {
  backEndMainskillsData,
  CompanyHistoryData,
  EducationHistoryData,
  frontEndMainskillsData,
} from "@/data/appData";
import {
  FaLaptopCode,
  FaReact,
  FaWordpress,
  FaServer,
  FaMapMarkedAlt,
} from "react-icons/fa";
import Timeline from "./Timeline";
import { IoSchoolOutline } from "react-icons/io5";
import { IoBriefcaseOutline } from "react-icons/io5";

const ExperienceSection = () => {
  return (
    <section
      id="experience-section"
      className=" scroll-mt-[64px] py-12 lg:py-16 bg-background-light"
    >
      <Container className=" " sm>
        <p className="text-primary-light  text-center dark:text-dark-text-light">
          My Qualification
        </p>
        <h2 className="text-4xl font-bold text-center text-secondary mb-5 md:mb-10">
          Awesome Journey
        </h2>
        <div className="grid grid-cols-1 mob-lg:grid-cols-[1fr_1px_1fr] gap-5 lg:gap-20 ">
          <div>
            <h4 className="text-3xl  font-medium  flex gap-3 items-center">
              <IoBriefcaseOutline />
              <span>Experience</span>
            </h4>
            <Timeline timelineData={CompanyHistoryData} />
          </div>
          <div className="bg-gray-200 w-[1px]" />
          <div>
            <h4 className="text-3xl text-center font-medium  flex gap-3 items-center">
              <IoSchoolOutline />
              <span>Education</span>
            </h4>
            <Timeline timelineData={EducationHistoryData} />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ExperienceSection;
