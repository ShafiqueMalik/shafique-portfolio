type SanityAsset = { asset: { _ref: string | null; url: string } | null } | null

export interface IPortfolioData {
  _id: string
  address: string
  completedProjects: number
  email: string
  experience: number
  firstName: string
  lastName: string
  phoneNumber: string
  profileImage: SanityAsset
  profileImage2: SanityAsset
  resume: SanityAsset
  role: string
  roleDescription: string
  socialLinks?: { _key: string; platform: string; url: string }[]
}

export interface IServiceItem {
  title: string
  description: string
  iconName?: string | null
  link?: string | null
  iconImage?: string | null
}

export interface IMyServices {
  heading: string
  subheading: string
  services: IServiceItem[]
}

export interface ISkill {
  name: string
  proficiency: number
}

export interface IMySkills {
  sectionTitle: string
  sectionSubtitle: string
  skillsGroups: { title: string; skills: ISkill[] }[]
}

export interface IJob {
  company: string
  positions: string[]
  startDate: string
  endDate: string
}

export interface IDegree {
  degree: string
  field: string
  startYear: number
  endYear: number
}

export interface IJourneyData {
  title: string
  subtitle: string
  experienceSection?: { title: string; jobs: IJob[] }
  educationSection?: { title: string; degrees: IDegree[] }
}

export interface IWorkItem {
  name: string
  slug?: string | null
  shortDescription?: string | null
  thumbnail?: string | null
  imageUrl?: string | null
  technologies?: string[] | null
  categories?: string[] | null
  links?: { live?: string; github?: string; caseStudy?: string } | null
  featured?: boolean
}

export interface IRecentWorks {
  sectionTitle: string
  sectionSubtitle: string
  works: IWorkItem[]
}
