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
