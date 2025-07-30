export const getHeroQuery = `*[_type == "hero"][0]`;
export const getSocialsQuery = `*[_type == "hero"][0]{
  socials
}`;

export const getPorfolioQuery = `
    *[_type == "myInformation"][0] {
      _id,
      _createdAt,
      firstName,
      lastName,
      fullName,
      role,
      experience,
      socialLinks,
      resume {
        asset->{
          _ref,
          url
        }
      },
      profileImage {
        asset->{
          _ref,
          url
        },
        hotspot
      },
      profileImage2 {
        asset->{
          _ref,
          url
        }
      },
      completedProjects,
      roleDescription,
      phoneNumber,
      email,
      address
    }
  `