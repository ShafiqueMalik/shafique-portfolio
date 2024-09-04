import Container from "@/components/layout/Container";
import Flex from "@/components/layout/Flex";
import Progressbar from "@/components/Progressbar";
import {
  backEndMainskillsData,
  CompanyHistoryData,
  EducationHistoryData,
  frontEndMainskillsData,
  ProjectCategories,
  ProjectsData,
} from "@/data/appData";
import {
  FaLaptopCode,
  FaReact,
  FaWordpress,
  FaServer,
  FaMapMarkedAlt,
} from "react-icons/fa";
import { IoSchoolOutline } from "react-icons/io5";
import { IoBriefcaseOutline } from "react-icons/io5";
import PortfolioCard from "./PortfolioCard";

const PortfolioSection = () => {
  return (
    <section className="py-12 " id="services">
      <Container className=" " sm>
        <p className="text-primary-light  text-center">My Portfolio</p>
        <h2 className="text-4xl font-bold text-center text-secondary mb-5 md:mb-10">
          Recent Works
        </h2>
        <ul className="flex justify-center gap-5 md:gap-8 mb-10 items-center">
          {ProjectCategories.map((category) => (
            <li className="text-primary border-transparent first:border-secondary hover:border-secondary transition-all duration-300 border-b-[3px]   first:text-secondary">
              <button className=" ">{category}</button>
            </li>
          ))}
        </ul>
        <div className="grid grid-cols-3 gap-5 md:gap-10 ">
          {ProjectsData.ui.map((project: any, index: number) => (
            <PortfolioCard key={index} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default PortfolioSection;
