import React, { useEffect } from "react";
import { BsTelephoneOutbound } from "react-icons/bs";
import AOS from "aos";

// ------> Css
import "aos/dist/aos.css";
import "./about.css";

function About() {
  // ------> Use aos animation library
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section
      id="about"
      className={`pt-[100px] pb-[150px] sm:pt-[150px] sm:pb-[180px] mt-[64px] sm:mt-[65px] hero`}
    >
      <div className="container">
        <div className="max-w-[900px] w-full mx-auto">
          <h2
            data-aos="fade-up"
            data-aos-duration="700"
            className="font-bold text-white text-[32px] leading-[40px] sm:text-[64px] sm:leading-[78px] text-center"
          >
            Hey! I'm Shokhruz
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="700"
            className="max-w-[600px] w-full mx-auto font-normal sm:font-medium text-lg leading-[24px] text-white text-center mt-5 sm:mt-8 mb-14"
          >
            a dedicated Software Engineer with over a year of hands-on
            experience specializing in React.js, Next.js, and JavaScript. With a
            meticulous attention to detail, I take pride in crafting immersive
            UI designs that captivate users and enhance digital interactions.
          </p>
          <div className="flex items-center justify-center">
            <a
              href="tel:+998995870232"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="150"
              className="flex items-center mx-auto lg:mx-0 w-fit text-sm border border-white hover:border-[#0071E3] text-white hover:text-[#0071E3] rounded-[4px] py-2 px-4 duration-300 group"
            >
              Contact Me{" "}
              <BsTelephoneOutbound className="ml-2 text-white group-hover:text-[#0071E3]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
