import Container from '@/components/layout/Container';
import { CompanyHistoryData, EducationHistoryData } from '@/data/appData';
import Timeline from './Timeline';
import { IoSchoolOutline } from 'react-icons/io5';
import { IoBriefcaseOutline } from 'react-icons/io5';
import { fetchFromSanity } from '@/lib/fetchFromSanity';
import { IJourneyData } from '@/shared/types/models';
import { getJourneyQuery } from '@/lib/sanityQueries';

const ExperienceSection = async () => {
  const myJourneyData = await fetchFromSanity<IJourneyData>(getJourneyQuery);
  console.log('Journey Data', myJourneyData);
  const { title, subtitle, experienceSection, educationSection } = myJourneyData || {};
  const updateExperiecelist = experienceSection?.jobs?.map((job) => {
    return {
      title: job.company,
      date: `${job.startDate} -  ${job.endDate}`,
      description: job.positions,
    };
  });
  const educationHistoryData = educationSection?.degrees?.map((degree) => {
    return {
      title: degree.degree,
      date: `${degree.startYear} - ${degree.endYear}`,
      description: [degree.field],
    };
  });
  return (
    <section
      id="experience-section"
      className=" scroll-mt-[64px] py-12 lg:py-16 bg-background-light"
    >
      <Container className=" " sm>
        <p className="text-primary-light  text-center dark:text-dark-text-light">{title}</p>
        <h2 className="text-4xl font-bold text-center text-secondary mb-5 md:mb-10">{subtitle}</h2>
        <div className="grid grid-cols-1 mob-lg:grid-cols-[1fr_1px_1fr] gap-5 lg:gap-20 ">
          <div>
            <h4 className="text-3xl  font-medium  flex gap-3 items-center">
              <IoBriefcaseOutline />
              <span>{experienceSection?.title}</span>
            </h4>
            <Timeline timelineData={updateExperiecelist} />
          </div>
          <div className="bg-gray-200 w-[1px] dark:bg-gray-700" />
          <div>
            <h4 className="text-3xl text-center font-medium  flex gap-3 items-center">
              <IoSchoolOutline />
              <span>{educationSection.title}</span>
            </h4>
            <Timeline timelineData={educationHistoryData} />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ExperienceSection;
