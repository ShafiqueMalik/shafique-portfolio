import { sanity } from "../sanity";

export async function fetchHeroData() {
  return await sanity.fetch(`*[_type == "hero"][0]`);
}
export async function fetchSocialsData() {
  const response = await sanity.fetch(`*[_type == "hero"][0]{
    socials
  }`);
  return response?.socials || {};
}