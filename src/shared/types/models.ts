export interface ISocialLink {
  platform: 'linkedin' | 'email' | 'location' | 'phone' | string;
  url: string;
  icon?: any;
}

export interface IPortfolioData {
  _createdAt: string;
  _id: string;
  address: string;
  completedProjects: number;
  email: string;
  experience: number;
  firstName: string;
  fullName: string;
  lastName: string;
  phoneNumber: string;
  profileImage: {
    asset: {
      _ref: string | null;
      url: string;
    };
    hotspot: unknown | null;
  };
  profileImage2: {
    asset: {
      _ref: string | null;
      url: string;
    };
  };
  resume: {
    asset: {
      _ref: string | null;
      url: string;
    };
  };
  role: string;
  roleDescription: string;
  socialLinks: {
    _key: string;
    platform: string;
    url: string;
  }[];
}

export interface IServiceItem {
  title: string;
  description: string;
  iconName?: string; // Optional, used if icon is from icon library like react-icons
  bgColor?: string; // Optional background color (e.g., "#f0f0f0")
  link?: string; // Optional link to detail page
  iconImage?: string; // Resolved image URL (optional)
}

export interface IMyServices {
  heading: string;
  subheading: string;
  services: IServiceItem[];
}

//

export interface ISkill {
  name: string;
  proficiency: number;
  iconName?: string;
  iconImage?: string; // Resolved image URL
}

export interface ISkillGroup {
  title: string;
  skills: ISkill[];
}
export interface IMySkills {
  sectionTitle: string;
  sectionSubtitle: string;
  skillsGroups: ISkillGroup[];
}

// journey
export interface IJob {
  company: string;
  positions: string[];
  startDate: string; // Format: "MMM YYYY" (e.g. "Oct 2022")
  endDate: string; // Format: "MMM YYYY" or "Present"
}
export interface IExperience {
  title: string;
  jobs: IJob[];
}

// education
export interface IDegree {
  degree: string;
  field: string;
  startYear: number;
  endYear: number;
}
export interface IEducation {
  title: string;
  degrees: IDegree[];
}

// Journey
export interface IJourneyData {
  title: string;
  subtitle: string;
  experienceSection: IExperience;
  educationSection: IEducation;
}

// recent works
export interface IRecentWorks {
  sectionTitle: string;
  sectionSubtitle: string;
  works: IWorkItem[];
}

export interface IWorkItem {
  name: string;
  slug?: { current: string };
  shortDescription?: string;
  longDescription?: any;
  image?: string;
  technologies: string[];
  categories: string[];
  links?: {
    live?: string;
    github?: string;
    caseStudy?: string;
  };
  featured?: boolean;
}
