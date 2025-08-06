export const getHeroQuery = `*[_type == "hero"][0]`;
export const getSocialsQuery = `*[_type == "hero"][0]{
  socials
}`;

export const getPorfolioQuery = `
  *[_type == "portfolioInformation"][0] {
    ...,
    resume {
      asset->{_ref, url}
    },
    profileImage {
      ...,
      asset->{_ref, url}
    },
    profileImage2 {
      ...,
      asset->{_ref, url}
    }
  }
`;

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
}`;

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
}`;

export const getExperienceQuery = `*[_type == "experience"][0] {
  title,
  jobs[] {
    company,
    positions,
    startDate,
    endDate
  }
}`;

export const getEducationQuery = `*[_type == "education"][0] {
  title,
  degrees[] {
    degree,
    field,
    startYear,
    endYear
  }
}`;

export const getJourneyQuery = `*[_type == "journey"][0] {
  title,
  subtitle,
  experienceSection-> {
    title,
    jobs[] {
      company,
      positions,
      startDate,
      endDate
    }
  },
  educationSection-> {
    title,
    degrees[] {
      degree,
      field,
      startYear,
      endYear
    }
  }
}`;
