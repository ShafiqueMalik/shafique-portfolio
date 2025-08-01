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
