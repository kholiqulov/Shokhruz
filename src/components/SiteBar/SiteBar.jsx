import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";

// ------> Images
import Logo from "../../Assets/Images/png/logo.png";
import Call from "../../Assets/Images/svg/icon_call.svg";
import Arrow from "../../Assets/Images/svg/menu-arrow.svg";

// ------> Css
import "aos/dist/aos.css";

function SiteBar({ isVisible, onClose }) {
  // ------> Use aos animation library
  useEffect(() => {
    AOS.init();
  }, []);

  if (!isVisible) return null;

  const handleClick = (e) => {
    if (e.target.id === "wrapper") onClose();
  };

  return (
    <div
      id="wrapper"
      onClick={handleClick}
      className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-[2px] flex justify-center items-center z-40 duration-300"
    >
      <div
        data-aos="fade-right"
        data-aos-duration="400"
        className={`${
          isVisible ? "left-0" : "-left-[100%] transition-all"
        } w-[85%] h-full absolute top-0 bg-white px-5 z-50`}
      >
        <div className="mt-[120px] flex flex-col justify-between max-h-[80%] h-full">
          <ul className="flex flex-col items-start">
            <li className="w-[80%] flex items-center justify-between duration-300 cursor-pointer mb-10 group">
              <a
                onClick={onClose}
                href="#about"
                className="font-bold text-xl leading-[25px] text-[#232323]"
              >
                ABOUT
              </a>
              <img className="w-6 h-6" src={Arrow} alt="arrow-right" />
            </li>
            <li className="w-[80%] flex items-center justify-between duration-300 cursor-pointer mb-10 group">
              <a
                onClick={onClose}
                href="#skills"
                className="font-bold text-xl leading-[25px] text-[#232323]"
              >
                SKILLS
              </a>
              <img className="w-6 h-6" src={Arrow} alt="arrow-right" />
            </li>
            <li className="w-[80%] flex items-center justify-between duration-300 cursor-pointer mb-10 group">
              <a
                onClick={onClose}
                href="#experience"
                className="font-bold text-xl leading-[25px] text-[#232323]"
              >
                EXPERIENCE
              </a>
              <img className="w-6 h-6" src={Arrow} alt="arrow-right" />
            </li>
            <li className="w-[80%] flex items-center justify-between duration-300 cursor-pointer mb-10 group">
              <a
                onClick={onClose}
                href="#contact"
                className="font-bold text-xl leading-[25px] text-[#232323]"
              >
                CONTACT
              </a>
              <img className="w-6 h-6" src={Arrow} alt="arrow-right" />
            </li>
          </ul>
          <ul className="w-full mb-5">
            <li className="flex justify-center">
              <Link
                onClick={onClose}
                to="/"
                className="inline-block w-[50px] h-[50px]"
              >
                <img src={Logo} alt="logo" />
              </Link>
            </li>
            <li className="flex justify-center w-full mt-6">
              <a
                href="tel:+998974881512"
                className="flex items-center font-normal text-xl text-[#0071E3] py-[16px] px-6 bg-[#F5F5F5] rounded-2xl"
              >
                <img className="mr-2" src={Call} alt="call-icon" />
                +998 99-587-02-32
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SiteBar;
