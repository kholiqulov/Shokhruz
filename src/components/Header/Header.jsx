import React, { useEffect, useState } from "react";
import SiteBar from "../SiteBar/SiteBar";
import { TbDownload } from "react-icons/tb";
import { Link } from "react-router-dom";

// ------> Images
import Logo from "../../Assets/Images/png/logo.png";

// ------> Pdf
import Resume from "../../Assets/pdf/resume.pdf";

function Header() {
  const [showModal, setShowModal] = useState(false);

  // ---> Close dropdown
  window.addEventListener("click", (e) => {
    if (e.target.id !== "wrapper");
  });

  // ------> Check click menu for hide scroll
  useEffect(() => {
    if (showModal) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "scroll";
    }
  }, [showModal]);

  return (
    <header className={`fixed top-0 w-full bg-white z-50 shadow-lg`}>
      <div className="container">
        <div className="flex items-center justify-between py-3">
          <Link className="block w-[50px] h-[50px]" to="/">
            <img src={Logo} alt="logo" />
          </Link>
          <nav className="ml-12 hidden lg:block">
            <ul className="flex items-center space-x-12">
              <li className="nav_item group">
                <a
                  href="#about"
                  className="nav_link font-black text-sm leading-[17px] text-[#454545] group-hover:text-[#0071E3] duration-200"
                >
                  ABOUT
                </a>
              </li>
              <li className="nav_item group">
                <a
                  href="#skills"
                  className="nav_link font-black text-sm leading-[17px] text-[#454545] group-hover:text-[#0071E3] duration-200"
                >
                  SKILLS
                </a>
              </li>
              <li className="nav_item group">
                <a
                  href="#experience"
                  className="nav_link font-black text-sm leading-[17px] text-[#454545] group-hover:text-[#0071E3] duration-200"
                >
                  EXPERIENCE
                </a>
              </li>
              <li className="nav_item group">
                <a
                  href="#contact"
                  className="nav_link font-black text-sm leading-[17px] text-[#454545] group-hover:text-[#0071E3] duration-200"
                >
                  CONTACT
                </a>
              </li>
              <a
                href={Resume}
                download="Nodirbek's resume.pdf"
                className="flex items-center font-black text-sm ml-5 border border-[#454545] hover:border-[#0071E3] text-[#454545] hover:text-[#0071E3] rounded-[6px] py-2 px-3 duration-200"
              >
                RESUME
                <span className="inline-block ml-2">
                  <TbDownload />
                </span>
              </a>
            </ul>
          </nav>
          <div className="flex items-center justify-between md:hidden space-x-5">
            <a
              href={Resume}
              download="Nodirbek's resume.pdf"
              className="flex items-center font-black text-sm ml-5 border border-[#454545] hover:border-[#0071E3] text-[#454545] hover:text-[#0071E3] rounded-[6px] py-2 px-3 duration-200"
            >
              RESUME
              <span className="inline-block ml-2">
                <TbDownload />
              </span>
            </a>
            <button
              className="z-50 flex flex-col justify-between w-7 h-5 mr-3"
              onClick={() => setShowModal(!showModal)}
            >
              <span
                className={`${
                  showModal ? "-rotate-45 translate-y-[8.8px]" : ""
                } inline-block w-full h-[2px] bg-black duration-200`}
              ></span>
              <span
                className={`${
                  showModal ? "hidden" : ""
                } inline-block w-[60%] h-[2px] bg-black`}
              ></span>
              <span
                className={`${
                  showModal ? "rotate-45 -translate-y-[8.8px]" : ""
                } inline-block w-full h-[2px] bg-black duration-200`}
              ></span>
            </button>
          </div>
        </div>
      </div>

      {/* ------ Site_Bar ------ */}

      <SiteBar
        isVisible={showModal}
        onClose={() => {
          setShowModal(false);
        }}
      />
    </header>
  );
}

export default Header;
