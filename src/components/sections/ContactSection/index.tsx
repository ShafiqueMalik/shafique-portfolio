import Container from "@/components/layout/Container";

import ContactForm from "./ContactForm";
import { socialData } from "@/data/appData";
import Link from "next/link";
import Flex from "@/components/layout/Flex";
import { twMerge } from "tailwind-merge";
import { MdOutlineFileDownload } from "react-icons/md";

const ContactSection = () => {
  return (
    <section id="contact-section" className=" scroll-mt-[64px] py-12 ">
      <Container className=" " sm>
        <p className="text-primary-light  text-center dark:text-dark-text-light">
          Contact Info
        </p>
        <h2 className="text-4xl font-bold text-center text-secondary mb-5 md:mb-10">
          Get In Touch
        </h2>
        <div
          className="grid border-2 rounded-3xl 
        lg:rounded-none grid-cols-1 md:grid-cols-[1fr_1fr] lg:rounded-tr-[80px] lg:rounded-bl-[80px]  
        overflow-hidden
        
        "
        >
          <div className=" bg-primary/10 px-5 md:px-10 py-10 dark:bg-dark">
            <h3 className="text-2xl font-medium">Send Me A Message</h3>
            <ContactForm />
          </div>
          <div className="bg-primary text-white  px-5 md:px-10 py-10 dark:bg-dark-light">
            <h3 className="text-2xl font-medium mb-5">Contact Information</h3>

            <ul className="space-y-4 ">
              {socialData.map((social) => (
                <li key={social.title}>
                  <Link target="_blank" href={social.link} className="">
                    <Flex className="gap-2 md:gap-3 items-start">
                      <div className="translate-y-[6px]">
                        <social.icon className={twMerge(" ")} />
                      </div>
                      <div className="space-y-0">
                        <h4 className="text-lg font-semibold">
                          {social.title}
                        </h4>
                        <p className="opacity-70 text-sm italic">
                          {social.subTitle}
                        </p>
                      </div>
                    </Flex>
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              href="/assets/ShafiqueMalik.docx"
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
