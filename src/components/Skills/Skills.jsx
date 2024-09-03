import React, { useEffect } from "react";
import AOS from "aos";

// ------> Css
import "aos/dist/aos.css";

// ------> Images
import Cosmetik from "../../Assets/Images/svg/cosmetika.svg";
import Electr from "../../Assets/Images/svg/electr.svg";
import Cons from "../../Assets/Images/svg/konselar.svg";
import Access from "../../Assets/Images/svg/access.svg";
import Food from "../../Assets/Images/svg/ovqat.svg";
import Kiy from "../../Assets/Images/svg/kiyim.svg";

function Skills() {
  // ------> Use aos animation library
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section id="skills" className="pt-[100px]">
      <div className="w-full">
        <h2 className="font-bold text-[25px] md:text-[30px] leading-[20px] md:leading-[40px] text-[#232323] text-center mb-8 sm:mb-[80px]">
          SKILLS
        </h2>
        <ul className="container grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
          <li
            data-aos="fade-right"
            data-aos-duration="700"
            className="flex items-center justify-between px-4 py-3 bg-[#F5F5F5] rounded-2xl hover:scale-[1.03] duration-150"
          >
            <p className="font-medium text-base leading-[20px] text-[#454545]">
              Start-up Leadership
            </p>
            <img className="w-8 h-8" src={Electr} alt="icons" />
          </li>
          <li
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-duration="700"
            className="flex items-center justify-between px-4 py-3 bg-[#F5F5F5] rounded-2xl hover:scale-[1.03] duration-150"
          >
            <p className="font-medium text-base leading-[20px] text-[#454545]">
              Department Management
            </p>
            <img className="w-8 h-8" src={Food} alt="icons" />
          </li>
          <li
            data-aos="fade-right"
            data-aos-delay="400"
            data-aos-duration="700"
            className="flex items-center justify-between px-4 py-3 bg-[#F5F5F5] rounded-2xl hover:scale-[1.03] duration-150"
          >
            <p className="font-medium text-base leading-[20px] text-[#454545]">
              Python (Programming Language)
            </p>
            <img className="w-8 h-8" src={Cons} alt="icons" />
          </li>
          <li
            data-aos="fade-right"
            data-aos-delay="600"
            data-aos-duration="700"
            className="flex items-center justify-between px-4 py-3 bg-[#F5F5F5] rounded-2xl hover:scale-[1.03] duration-150"
          >
            <p className="font-medium text-base leading-[20px] text-[#454545]">
              HTML
            </p>
            <img className="w-8 h-8" src={Access} alt="icons" />
          </li>
          <li
            data-aos="fade-right"
            data-aos-delay="800"
            data-aos-duration="700"
            className="flex items-center justify-between px-4 py-3 bg-[#F5F5F5] rounded-2xl hover:scale-[1.03] duration-150"
          >
            <p className="font-medium text-base leading-[20px] text-[#454545]">
              Cascading Style Sheets (CSS)
            </p>
            <img className="w-8 h-8" src={Cosmetik} alt="icons" />
          </li>
          <li
            data-aos="fade-right"
            data-aos-delay="1000"
            data-aos-duration="700"
            className="flex items-center justify-between px-4 py-3 bg-[#F5F5F5] rounded-2xl hover:scale-[1.03] duration-150"
          >
            <p className="font-medium text-base leading-[20px] text-[#454545]">
              Bootstrap (Framework)
            </p>
            <img className="w-8 h-8" src={Kiy} alt="icons" />
          </li>
          <li
            data-aos="fade-right"
            data-aos-delay="1000"
            data-aos-duration="700"
            className="flex items-center justify-between px-4 py-3 bg-[#F5F5F5] rounded-2xl hover:scale-[1.03] duration-150"
          >
            <p className="font-medium text-base leading-[20px] text-[#454545]">
              JavaScript
            </p>
            <img className="w-8 h-8" src={Kiy} alt="icons" />
          </li>
          <li
            data-aos="fade-right"
            data-aos-delay="1000"
            data-aos-duration="700"
            className="flex items-center justify-between px-4 py-3 bg-[#F5F5F5] rounded-2xl hover:scale-[1.03] duration-150"
          >
            <p className="font-medium text-base leading-[20px] text-[#454545]">
              React.js
            </p>
            <img className="w-8 h-8" src={Kiy} alt="icons" />
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Skills;
