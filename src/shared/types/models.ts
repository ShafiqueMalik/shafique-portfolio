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
