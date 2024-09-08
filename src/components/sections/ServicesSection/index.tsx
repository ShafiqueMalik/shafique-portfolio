// components/ServicesSection.js
import Container from "@/components/layout/Container";
import { servicesData } from "@/data/appData";

const ServicesSection = () => {
  return (
    <section
      className=" scroll-mt-[64px] py-12 lg:py-16 dark:bg-dark"
      id="services-section"
    >
      <Container className="" sm>
        <h2 className="text-4xl font-bold text-center mb-2 text-secondary">
          My Services
        </h2>
        <p className="text-sm text-center max-w-[500px] mx-auto mb-8 md:mb-10 font-light">
          My goal is to ensure that every solution I provide is not only
          functional but also exceeds expectations in terms of performance and
          user experience.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8">
          {servicesData.map((service, index) => (
            <div
              key={service.title}
              className="bg-white dark:bg-dark-light 
               rounded-lg shadow-lg p-6 hover:shadow-2xl transform hover:scale-105 transition-transform duration-300"
            >
              <div className="flex  mb-2">
                <service.icon className="w-12 h-12 text-blue-600 dark:text-dark-text" />
              </div>
              <h3 className="text-xl font-semibold  text-gray-800 mb-0 dark:text-dark-text">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm  dark:text-dark-text-light">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ServicesSection;
