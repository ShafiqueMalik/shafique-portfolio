// TODO: Download CV uses public/cv.pdf, not this resume asset. When resume is updated in sanity.io → Portfolio › resume, replace public/cv.pdf as well.
export const getPortfolioQuery = `
  *[_type == "portfolioInformation"][0] {
    ...,
    resume { asset->{_ref, url} },
    profileImage { ..., asset->{_ref, url} },
    profileImage2 { ..., asset->{_ref, url} }
  }
`

export const getServicesQuery = `*[_type == "myServices"][0]{
  heading,
  subheading,
  services[]{
    title,
    description,
    iconName,
    bgColor,
    link,
    "iconImage": iconImage.asset->url
  }
}`

export const getMySkillsQuery = `*[_type == "mySkills"][0]{
  sectionTitle,
  sectionSubtitle,
  skillsGroups[]{
    title,
    skills[]{
      name,
      proficiency,
      iconName,
      "iconImage": iconImage.asset->url
    }
  }
}`

export const getJourneyQuery = `*[_type == "journey"][0] {
  title,
  subtitle,
  experienceSection-> {
    title,
    jobs[] { company, positions, startDate, endDate }
  },
  educationSection-> {
    title,
    degrees[] { degree, field, startYear, endYear }
  }
}`

export const getRecentWorksQuery = `*[_type == "recentWorks"][0]{
  sectionTitle,
  sectionSubtitle,
  works[]{
    name,
    "slug": slug.current,
    shortDescription,
    "thumbnail": thumbnail.asset->url,
    "imageUrl": image.asset->url,
    technologies,
    categories,
    links{ live, github, caseStudy },
    featured
  }
}`
