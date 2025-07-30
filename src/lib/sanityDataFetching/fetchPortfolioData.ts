import { sanity } from "../sanity";
import { getPorfolioQuery } from "../sanityQueries";

export async function fetchPortfolioData() {
  return await sanity.fetch(getPorfolioQuery);
}