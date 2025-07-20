import { IoLocationOutline } from "react-icons/io5";
import { VscCallOutgoing } from "react-icons/vsc";
import { MdOutlineMail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { PROJECTS_IMAGES } from "../../public/assets/images/projects";

import { IoHomeOutline } from "react-icons/io5";
import { IoInformationCircleOutline } from "react-icons/io5";
import { GiSkills } from "react-icons/gi";
import { IoSchoolOutline } from "react-icons/io5";
import { IoBriefcaseOutline } from "react-icons/io5";
import { MdOutlineContactMail } from "react-icons/md";
import {
  FaLaptopCode,
  FaReact,
  FaWordpress,
  FaServer,
  FaMapMarkedAlt,
} from "react-icons/fa";

export const socialData = [
  {
    title: "Address",
    subTitle: "Kashmir Colony No.2 Chanda Qilla Gujranwala, Punjab Pakistan",
    icon: IoLocationOutline,
    link: "http://maps.google.com?q=32.099661,74.195231",
  },
  {
    title: "Let's Talk",
    subTitle: "+92111323500",
    icon: VscCallOutgoing,
    link: "tel:+921323500",
  },

  {
    title: "Email",
    subTitle: "imshafiqmalik@gmail.com",
    icon: MdOutlineMail,
    link: "mailto:imshafiqmalik@gmail.com",
  },
  {
    title: "LinkedIn",
    subTitle: "https://www.linkedin.com/in/shafique-malik-17830616b/",
    icon: FaLinkedin,
    link: "https://www.linkedin.com/in/shafique-malik-17830616b/",
  },

  // {
  //     title: "abc",
  //     subTitle:'abc',
  //     icon: "abc",
  //     link: "abc",
  // }
];

export const frontEndMainskillsData = [
  {
    skill: "HTML5",
    value: 95,
  },
  {
    skill: "CSS3 & SASS",
    value: 95,
  },
  {
    skill: "Javascript/Typescript",
    value: 95,
  },

  {
    skill: "React.js",
    value: 95,
  },
  {
    skill: "Next.js 15+",
    value: 90,
  },
  {
    skill: "TailwindCSS",
    value: 95,
  },
  {
    skill: "Material UI",
    value: 85,
  },
  {
    skill: "Bootstrap",
    value: 95,
  },
  {
    skill: "React Bootstrap",
    value: 95,
  },
  {
    skill: "Redux/Toolkit/RTQ",
    value: 90,
  },
  {
    skill: "React Testing Library",
    value: 80,
  },

];
export const backEndMainskillsData = [
  {
    skill: "Node JS ",
    value: 80,
  },
  {
    skill: "Express",
    value: 80,
  },
  {
    skill: "Mongodb",
    value: 75,
  },
  {
    skill: "Asp.net Core",
    value: 60,
  },
  {
    skill: "My SQL Server",
    value: 60,
  },
];

export const CompanyHistoryData = [
  {
    title: "Systems Limited",
    date: "Oct 2022 - Present",
    description: ["Consultant Developer", "Senior Consultant Developer"],
  },
  {
    title: "Royal Cyber Inc.",
    date: "Jan 2022 - Oct 2022",
    description: ["Front End - UI Developer"],
  },
  {
    title: "PHENOLOGIX",
    date: "Nov 2018 - Jan 2021",
    description: ["Front End Developer"],
  },
  {
    title: "TAX & SOFTWARE HUB",
    date: "Feb 2018 - Aug 2018",
    description: ["Junior Dot Net Developer"],
  },
];
export const EducationHistoryData = [
  {
    title: "BSc in IT",
    description: ["Computer Science"],
    date: "2014 - 2018",
  },
  {
    title: "ICS (Intermediate of Computer Science)",
    description: ["Computer Science"],
    date: "2012 - 2014",
  },
  {
    title: "Matriculation In Science",
    description: ["Science"],
    date: "2010 - 2012",
  },
];

export const ProjectCategories = [
  "All",
  "ReactJS",
  "Responsive",
  "Design",
  "HTML5/CSS3",
  "NodeJS",
];
export const ProjectsData = {
  ui: [
    {
      name: "aalaap",
      thumbnail: PROJECTS_IMAGES.aalaapThumbnail,
      fullScreenShot: "",
      technologies: ["Html5", "Css3", "Javascript"],
      description: ``,
      link: "https://aalaap.netlify.app",
    },
    {
      name: "prinvesto",
      thumbnail: PROJECTS_IMAGES.prinvestoThumbnail,
      fullScreenShot: "",
      technologies: ["Html5", "Css3", "Javascript"],
      description: "",
      link: "https://prinvesto.netlify.app",
    },
    {
      name: "juno",
      thumbnail: PROJECTS_IMAGES.junoThumbnail,
      fullScreenShot: "",
      technologies: ["Html5", "Css3", "Javascript"],
      description: "",
      link: "https://juno-college.netlify.app",
    },
    {
      name: "Lottery Corner",
      thumbnail: PROJECTS_IMAGES.loteryCornerThumbnail,
      fullScreenShot: "",
      technologies: ["Html5", "Css3", "Javascript", "Sass"],
      description: "",
      link: "https://www.lotterycorner.com/",
    },
    {
      name: "Price Genius",
      thumbnail: PROJECTS_IMAGES.priceGeniusThumbnail,
      fullScreenShot: "",
      technologies: ["Html5", "Css3", "Bootstrap", "Javascript", "Sass"],
      description: "",
      link: "https://price-genius.netlify.app",
    },
    {
      name: "taxi noord",
      thumbnail: PROJECTS_IMAGES.taxiNoordThumbnail,
      fullScreenShot: "",
      technologies: ["Html5", "Css3", "Javascript"],
      description: "",
      link: "https://taxi-noords.netlify.app",
    },
    {
      name: "The Plumber",
      thumbnail: PROJECTS_IMAGES.thePlumberThumbnail,
      fullScreenShot: "",
      technologies: ["Wordpress", "Elementor", "Javascript"],
      description: "",
      link: "https://theplumber.netlify.app/",
    },
  ],
};

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
    text: "Services",
    sectionId: "services-section",
    icon: IoInformationCircleOutline,
  },
  {
    text: "Portfolio",
    sectionId: "portfolio-section",
    icon: IoBriefcaseOutline,
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
    text: "Contact Me",
    sectionId: "contact-section",
    icon: MdOutlineContactMail,
  },
];

export const servicesData = [
  {
    title: "Responsive Websites",
    icon: FaLaptopCode,
    description: "Creating fully responsive and mobile-friendly websites.",
  },
  {
    title: "ReactJS / NextJS",
    icon: FaReact,
    description:
      "Building dynamic and modern web applications with React and Next.js.",
  },
  {
    title: "Theme Development",
    icon: FaWordpress,
    description: "Custom theme development for WordPress and other platforms.",
  },
  {
    title: "REST API",
    icon: FaServer,
    description: "Designing and developing RESTful APIs for your applications.",
  },
  {
    title: "Google Map JS API",
    icon: FaMapMarkedAlt,
    description:
      "Integrating and customizing Google Maps using the JavaScript API.",
  },
];
