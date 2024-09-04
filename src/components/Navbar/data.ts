import { IoHomeOutline } from "react-icons/io5";
import { IoInformationCircleOutline } from "react-icons/io5";
import { GiSkills } from "react-icons/gi";
import { IoSchoolOutline } from "react-icons/io5";
import { IoBriefcaseOutline } from "react-icons/io5";
import { MdOutlineContactMail } from "react-icons/md";

export const navigationData = [
  {
    text: "Home",
    sectionId: "home-section",
    icon: IoHomeOutline,
  },
  {
    text: "About Me",
    sectionId: "about-section",
    icon: IoInformationCircleOutline,
  },
  {
    text: "Skills",
    sectionId: "skills-section",
    icon: GiSkills,
  },

  {
    text: "Experience",
    sectionId: "experience-section",
    icon: IoSchoolOutline,
  },
  {
    text: "Portfolio",
    sectionId: "portfolio-section",
    icon: IoBriefcaseOutline,
  },
  {
    text: "Contact Me",
    sectionId: "contact-section",
    icon: MdOutlineContactMail,
  },
];
