import Container from '@/components/layout/Container';
import { fetchFromSanity } from '@/lib/fetchFromSanity';
import { getServicesQuery } from '@/lib/sanityQueries';
import { IMyServices } from '@/shared/types/models';
import { iconsMap } from '@/shared/utils/Icons';
import { LiaCertificateSolid } from 'react-icons/lia';

import Image from 'next/image';
import { APP_IMAGES } from '../../../../public/assets/images';
const certificates = [
  { name: 'Next.js From Scratch', img: '/assets/images/certificates/nextjs-logo.png' },
  {
    name: 'React Testing Library',
    img: '/assets/images/certificates/react-testing.svg',
  },
  {
    name: 'Software Development',
    img: '/assets/images/certificates/software-development.png',
  },
  {
    name: 'AI with Github Copilot',
    img: '/assets/images/certificates/github-copilot1.png',
  },
  {
    name: 'Web Performance In Practice',
    img: '/assets/images/certificates/web-vitals.jpg',
  },
  {
    name: 'Business English Vocabulary',
    img: '/assets/images/certificates/english.png',
  },
  { name: 'C# Fundamental', img: '/assets/images/certificates/csharp1.png' },
];
const CertificatesSection = async () => {
  // const servicesDataSanity = await fetchFromSanity<IMyServices>(getServicesQuery);
  // console.log('servicesDataSanity', servicesDataSanity);
  // const { heading, subheading, services } = servicesDataSanity || {};
  // const getIconComponent = (iconName: string) => {
  //   const IconComponent = iconsMap[iconName];
  //   return IconComponent ? (
  //     <IconComponent className="w-12 h-12 text-blue-600 dark:text-dark-text" />
  //   ) : null;
  // };
  return (
    <section className=" scroll-mt-[64px] py-12 lg:py-16 dark:bg-dark" id="services-section">
      <Container className="" sm>
        <h2 className="text-4xl font-bold text-center mb-2 text-secondary">Certificates</h2>
        <p className="text-sm text-center max-w-[500px] mx-auto mb-8 md:mb-10 font-light">
          Here are some of the certificates I have earned throughout my career, showcasing my
          commitment to continuous learning and professional development.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10 lg:gap-x-8 ">
          {certificates.map((cert, index) => (
            <div
              className="flex items-center gap-2 bg-white dark:bg-dark-light 
               rounded-lg shadow-lg border border-gray-100
               dark:border-none
               relative
              hover:shadow-2xl transform hover:scale-105 transition-transform duration-300 "
            >
              <Image
                src={cert.img}
                alt="certificate"
                width={60}
                height={60}
                className="w-16 h-16 border border-black rounded-lg"
              />

              <h3 className="text-base font-semibold  text-gray-800 mb-0 dark:text-dark-text">
                {cert.name}
              </h3>
              <LiaCertificateSolid size={40} className="text-blue-500 absolute -bottom-7 left-3 " />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CertificatesSection;
