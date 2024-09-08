import Container from "@/components/layout/Container";
import { ProjectCategories, ProjectsData } from "@/data/appData";
import PortfolioCard from "./PortfolioCard";

const PortfolioSection = () => {
  return (
    <section
      id="portfolio-section"
      className=" scroll-mt-[64px] py-12 bg-background-light dark:bg-dark-light"
    >
      <Container className=" " sm>
        <p className="text-primary-light  text-center dark:text-dark-text-light">
          My Portfolio
        </p>
        <h2 className="text-4xl font-bold text-center text-secondary mb-5 md:mb-10">
          Recent Works
        </h2>
        <ul className="flex flex-wrap justify-center gap-y-2 gap-5 md:gap-8 mb-10 items-center">
          {ProjectCategories.map((category, idx) => (
            <li
              key={category}
              className="border-transparent    transition-all duration-300 border-b-[3px]   "
            >
              <button
                className={`px-3 py-1 border-primary dark:border-dark-text-light border disabled:opacity-30 ${
                  idx === 0
                    ? "text-secondary border-secondary dark:text-dark-text dark:border-dark-text"
                    : ""
                }`}
                disabled={idx !== 0}
                title={idx !== 0 ? "Coming Soon" : undefined}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>
        <div className="grid grid-cols-1 mob-lg:grid-cols-2 md:grid-cols-3 gap-10 md:gap-10 ">
          {ProjectsData.ui.map((project: any, index: number) => (
            <PortfolioCard key={project.name} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default PortfolioSection;
