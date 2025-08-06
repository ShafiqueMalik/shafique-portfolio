import Container from '@/components/layout/Container';
import Flex from '@/components/layout/Flex';
import Progressbar from '@/components/Progressbar';
import { fetchFromSanity } from '@/lib/fetchFromSanity';
import { getMySkillsQuery } from '@/lib/sanityQueries';
import { IMySkills } from '@/shared/types/models';

const MySkillsSection = async () => {
  const mySkills = await fetchFromSanity<IMySkills>(getMySkillsQuery);
  const { sectionTitle, sectionSubtitle, skillsGroups } = mySkills || {};
  const frontEndSkills = skillsGroups?.find((group) => group.title === 'FRONT-END SKILLS');
  const backEndSkills = skillsGroups?.find(
    (group) => group.title === 'BACK-END SKILLS (Secondary)'
  );
  return (
    <section id="skills-section" className=" scroll-mt-[64px] py-12 bg-white dark:bg-dark">
      <Container className=" ">
        <p className="text-primary-light text-center dark:text-dark-text-light">
          {sectionSubtitle}
        </p>
        <h2 className="text-4xl font-bold text-center text-secondary mb-5 md:mb-10">
          {sectionTitle}
        </h2>
        <div className="grid grid-cols-1 mob-lg:grid-cols-[1fr_1px_1fr] gap-5 lg:gap-20 ">
          <div>
            <h4 className="text-xl font-medium lg:text-3xl text-center mb-5">
              {frontEndSkills?.title}
            </h4>
            <ul className="grid grid-cols-1  md:grid-cols-2 gap-3 md:gap-6 justify-between">
              {frontEndSkills?.skills?.map((skill) => (
                <li key={skill.name}>
                  <Flex className="justify-between text-sm">
                    <span>{skill.name}</span>
                    <span>{skill.proficiency}%</span>
                  </Flex>
                  <Progressbar percentage={skill.proficiency} />
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gray-200 w-[1px]  dark:bg-gray-700" />
          <div>
            <h4 className="text-xl font-medium lg:text-3xl text-center mb-5">
              {backEndSkills?.title}
            </h4>
            <ul className="grid  grid-cols-1 md:grid-cols-2 gap-3 md:gap-6 justify-between">
              {backEndSkills?.skills?.map((skill, index) => (
                <li key={skill.name}>
                  <Flex className="justify-between text-sm">
                    <span>{skill.name}</span>
                    <span>{skill.proficiency}%</span>
                  </Flex>
                  <Progressbar key={index} percentage={skill.proficiency} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default MySkillsSection;
