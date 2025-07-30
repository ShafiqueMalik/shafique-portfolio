export interface ISocialLink {
  platform: 'linkedin' | 'email' | 'location' | 'phone' | string
  url: string
  icon?: any
}

export interface IMyInformation {
  _id: string
  _createdAt: string
  firstName: string
  lastName: string
  fullName: string
  role: string
  experience: number
  socialLinks: ISocialLink[]
  resume: {
    asset: {
      _ref: string
      url: string
    }
  }
  profileImage: {
    asset: {
      _ref: string
      url: string
    }
    hotspot?: {
      x: number
      y: number
    }
  }
  profileImage2?: {
    asset: {
      _ref: string
      url: string
    }
  }
  completedProjects: number
  roleDescription: string
  phoneNumber: string
  email: string
  address: string
}