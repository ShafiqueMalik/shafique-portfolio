import Container from "@/components/layout/Container";

import ContactForm from "./ContactForm";
import { GiSpring } from "react-icons/gi";
import { socialData } from "@/data/appData";
import Link from "next/link";
import Flex from "@/components/layout/Flex";
import { twMerge } from "tailwind-merge";

const ContactSection = () => {
  return (
    <section className="py-12 bg-background-light" id="services">
      <Container className=" " sm>
        <p className="text-primary-light  text-center">Contact Info</p>
        <h2 className="text-4xl font-bold text-center text-secondary mb-5 md:mb-10">
          Get In Touch
        </h2>
        <div className="grid grid-cols-[1fr_1fr] rounded-tr-[80px] rounded-bl-[80px]  overflow-hidden">
          <div className="px-5 md:px-10 bg-primary/10 p-5  md:p-10">
            <h3 className="text-2xl font-medium">Send Me A Message</h3>
            <ContactForm />
          </div>
          <div className="bg-primary text-white p-5 md:p-10">
            <h3 className="text-2xl font-medium mb-5">Contact Information</h3>

            <ul className="space-y-4 ">
              {socialData.map((social, index) => (
                <li>
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
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactSection;
