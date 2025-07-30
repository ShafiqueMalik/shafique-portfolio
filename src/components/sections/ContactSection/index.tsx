import Container from '@/components/layout/Container';

import ContactForm from './ContactForm';
import Link from 'next/link';
import { MdOutlineFileDownload, MdOutlineMail } from 'react-icons/md';
import { IPortfolioData } from '@/shared/types/models';
import SocialLink from '@/shared/components/SocialLink';
import { IoLocationOutline } from 'react-icons/io5';
import { VscCallOutgoing } from 'react-icons/vsc';
import { FaLinkedin } from 'react-icons/fa';
import { getFileUrl } from '@/lib/sanity';

type ContactSectionProps = {
  portfolioData?: IPortfolioData;
};
const ContactSection = ({ portfolioData }: ContactSectionProps) => {
  return (
    <section id="contact-section" className=" scroll-mt-[64px] py-12 ">
      <Container className=" " sm>
        <p className="text-primary-light  text-center dark:text-dark-text-light">Contact Info</p>
        <h2 className="text-4xl font-bold text-center text-secondary mb-5 md:mb-10">
          Get In Touch
        </h2>
        <div
          className="grid border-2 rounded-3xl 
        lg:rounded-none grid-cols-1 md:grid-cols-[1fr_1fr] lg:rounded-tr-[80px] lg:rounded-bl-[80px]  
        overflow-hidden
        dark:border-gray-900
        shadow shadow-gray-800
        "
        >
          <div className=" bg-primary/10 px-5 md:px-10 py-10 dark:bg-dark-light">
            <h3 className="text-2xl font-medium">Send Me A Message</h3>
            <ContactForm />
          </div>
          <div className="bg-primary text-white  px-5 md:px-10 py-10 dark:bg-dark">
            <h3 className="text-2xl font-medium mb-5">Contact Information</h3>

            <ul className="space-y-4 ">
              <li>
                <SocialLink
                  title="Address"
                  link={
                    portfolioData?.socialLinks?.find((link) => link.platform === 'location')
                      ?.url as string
                  }
                  subTitle={portfolioData?.address}
                  icon={<IoLocationOutline />}
                />
              </li>
              <li>
                <SocialLink
                  title="Let's Talk"
                  link={
                    portfolioData?.socialLinks?.find((link) => link.platform === 'phone')
                      ?.url as string
                  }
                  subTitle={portfolioData?.phoneNumber}
                  icon={<VscCallOutgoing />}
                />
              </li>
              <li>
                <SocialLink
                  title="Email"
                  link={
                    portfolioData?.socialLinks?.find((link) => link.platform === 'email')
                      ?.url as string
                  }
                  subTitle={portfolioData?.email}
                  icon={<MdOutlineMail />}
                />
              </li>
              <li>
                <SocialLink
                  title="LinkedIn"
                  link={
                    portfolioData?.socialLinks?.find((link) => link.platform === 'linkedin')
                      ?.url as string
                  }
                  subTitle={
                    portfolioData?.socialLinks?.find((link) => link.platform === 'linkedin')
                      ?.url as string
                  }
                  icon={<FaLinkedin />}
                />
              </li>
            </ul>

            <Link
              href={getFileUrl(portfolioData?.resume?.asset?._ref as string) || ''}
              download="Shafique Malik Resume"
              className="w-full underline flex items-center gap-2 mt-[30px]"
            >
              <MdOutlineFileDownload size={20} /> Download CV
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactSection;
