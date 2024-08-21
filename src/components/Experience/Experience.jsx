// import axios from "axios";
import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { BiCaretRight } from "react-icons/bi";
import { Context } from "../../Context/ModalContext";

// ------> Css
import "./experience.css";

function Experience() {
  const [active, setActive] = useState(false);
  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);
  const [active4, setActive4] = useState(false);
  const [active5, setActive5] = useState(true);

  // ------> Context
  const ctx = useContext(Context);
  const { show } = ctx;

  const handleClick = () => {
    setActive(true);
    setActive1(false);
    setActive2(false);
    setActive3(false);
    setActive4(false);
  };
  const handleClick1 = () => {
    setActive(false);
    setActive1(true);
    setActive2(false);
    setActive3(false);
    setActive4(false);
    setActive5(false);
  };
  const handleClick2 = () => {
    setActive(false);
    setActive1(false);
    setActive2(true);
    setActive3(false);
    setActive4(false);
    setActive5(false);
  };
  const handleClick3 = () => {
    setActive(false);
    setActive1(false);
    setActive2(false);
    setActive3(true);
    setActive4(false);
    setActive5(false);
  };
  const handleClick4 = () => {
    setActive(false);
    setActive1(false);
    setActive2(false);
    setActive3(false);
    setActive4(true);
    setActive5(false);
  };
  const handleClick5 = () => {
    setActive(false);
    setActive1(false);
    setActive2(false);
    setActive3(false);
    setActive4(false);
    setActive5(true);
  };

  return (
    <section id="experience" className="pt-[80px] sm:pt-[120px]">
      <div className="container">
        <h2 className="font-bold text-[25px] md:text-[30px] leading-[20px] md:leading-[40px] text-[#232323] text-center mb-8 sm:mb-[80px]">
          EXPERIENCE
        </h2>
        <div className="max-w-[800px] mx-auto">
          <div className="mt-8 sm:mt-12">
            <div className="flex flex-col sm:flex-row items-start">
              <div className="w-[70%] sm:w-[25%]">
                <button
                  className={`${
                    active5 ? "text-[#0071E3] active bg-[#F5F5F5]" : ""
                  } ${
                    show ? "!-z-10" : "z-0"
                  } track relative z- 20 text-sm text-[#454545] w-full text-start pl-4 py-[10px] duration-300 hover:bg-[#F5F5F5] rounded-r-md`}
                  onClick={handleClick5}
                >
                  VistaWave
                </button>
                <button
                  className={`${
                    active3 ? "text-[#0071E3] active bg-[#F5F5F5]" : ""
                  } ${
                    show ? "!-z-10" : "z-0"
                  } track relative z- 20 text-sm text-[#454545] w-full text-start pl-4 py-[10px] duration-300 hover:bg-[#F5F5F5] rounded-r-md`}
                  onClick={handleClick3}
                >
                  Codebridge School
                </button>
                <button
                  className={`${
                    active4 ? "text-[#0071E3] active bg-[#F5F5F5]" : ""
                  } ${
                    show ? "!-z-10" : "z-0"
                  } track relative z- 20 text-sm text-[#454545] w-full text-start pl-4 py-[10px] duration-300 hover:bg-[#F5F5F5] rounded-r-md`}
                  onClick={handleClick4}
                >
                  Tragon
                </button>
                <button
                  className={`${
                    active ? "text-[#0071E3] active bg-[#F5F5F5]" : ""
                  } ${
                    show ? "!-z-10" : "z-0"
                  } track relative z- 20 text-sm text-[#454545] w-full text-start pl-4 py-[10px] duration-300 hover:bg-[#F5F5F5] rounded-r-md`}
                  onClick={handleClick}
                >
                  Unical Solutions
                </button>
                <button
                  className={`${
                    active1 ? "text-[#0071E3] active bg-[#F5F5F5]" : ""
                  } ${
                    show ? "!-z-10" : "z-0"
                  } track relative z- 20 text-sm text-[#454545] w-full text-start pl-4 py-[10px] duration-300 hover:bg-[#F5F5F5] rounded-r-md`}
                  onClick={handleClick1}
                >
                  Support - IT Solutions
                </button>
                <button
                  className={`${
                    active2 ? "text-[#0071E3] active bg-[#F5F5F5]" : ""
                  } ${
                    show ? "!-z-10" : "z-0"
                  } track relative z- 20 text-sm text-[#454545] w-full text-start pl-4 py-[10px] duration-300 hover:bg-[#F5F5F5] rounded-r-md`}
                  onClick={handleClick2}
                >
                  RoboticsLab
                </button>
              </div>
              <div className="w-[100%] sm:w-[75%] sm:ml-10 mt-8 sm:mt-0">
                {active ? (
                  <>
                    <h2 className="text-xl text-[#0071E3] font-medium">
                      <span className="inline-block text-[#454545]">
                        Front End Developer at
                      </span>{" "}
                      Unical Solutions
                    </h2>
                    <strong className="inline-block font-normal text-sm text-[#454545] tracking-wide">
                      Yanuary 2023 - Present
                    </strong>
                    <ul className="space-y-3 mt-6">
                      <li className="flex items-start">
                        <BiCaretRight className="w-4 h-4 text-[#0071E3] mt-1 mr-2" />
                        <span className="inline-block max-w-[500px] w-full text-[#454545]">
                          High-Profile Projects: I worked on several
                          high-profile projects for notable clients, such as
                          JETOUR. These projects required a high level of
                          precision and attention to detail, enhancing my
                          ability to deliver top-quality work under pressure.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <BiCaretRight className="w-4 h-4 text-[#0071E3] mt-1 mr-2" />
                        <span className="inline-block max-w-[500px] w-full text-[#454545]">
                          Code Accuracy and Problem Avoidance: I paid meticulous
                          attention to the accuracy of my code, ensuring it was
                          bug-free and efficient. This focus on precision was a
                          key factor in the success of our projects, as it
                          minimized issues and streamlined the development
                          process.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <BiCaretRight className="w-4 h-4 text-[#0071E3] mt-1 mr-2" />
                        <span className="inline-block max-w-[500px] w-full text-[#454545]">
                          Version Control and Collaboration on GitHub: I learned
                          how to work effectively with a team using GitHub. This
                          included managing branches, conducting code reviews,
                          and ensuring smooth integration of code changes. These
                          skills are crucial for collaborative development and
                          maintaining project integrity.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <BiCaretRight className="w-4 h-4 text-[#0071E3] mt-1 mr-2" />
                        <span className="inline-block max-w-[500px] w-full text-[#454545]">
                          Customer-Centric Development: Working with
                          high-profile clients required a deep understanding of
                          their needs and expectations. I learned to develop
                          user-friendly solutions that met client requirements
                          and provided an optimal user experience.
                        </span>
                      </li>
                    </ul>
                  </>
                ) : (
                  ""
                )}
                {active1 ? (
                  <>
                    <h2 className="text-xl text-[#0071E3] font-medium">
                      <span className="inline-block text-[#454545]">
                        Front End Developer at
                      </span>{" "}
                      Support - IT Solutions
                    </h2>
                    <strong className="inline-block font-normal text-sm text-[#454545] tracking-wide">
                      August 2022 - Yanuary 2023
                    </strong>
                    <ul className="space-y-3 mt-6">
                      <li className="flex items-start">
                        <BiCaretRight className="w-4 h-4 text-[#0071E3] mt-1 mr-2" />
                        <span className="inline-block max-w-[500px] w-full text-[#454545]">
                          Worked with a variety of different languages,
                          platforms and frameworks management systems such as
                          JavaScript (ES6+), TypeScript, React Js,
                          React-router-dom, Tailwind Css, Redux Github, Gitlab
                          and Netlify
                        </span>
                      </li>
                      <li className="flex items-start">
                        <BiCaretRight className="w-4 h-4 text-[#0071E3] mt-1 mr-2" />
                        <span className="inline-block max-w-[500px] w-full text-[#454545]">
                          This company gave me first change to join a team and
                          taught me how to increase my level. I attempted a lot
                          of meetings the company held to encourage their
                          employees and every meeting had unexpected gifts that
                          was for hard working peopleю
                        </span>
                      </li>
                      <li className="flex items-start">
                        <BiCaretRight className="w-4 h-4 text-[#0071E3] mt-1 mr-2" />
                        <span className="inline-block max-w-[500px] w-full text-[#454545]">
                          I had a team which made of 5 people. We were so close
                          toeach other and that is why finding a solutions for
                          problems was not such difficult.
                        </span>
                      </li>
                    </ul>
                  </>
                ) : (
                  ""
                )}
                {active2 ? (
                  <>
                    <h2 className="text-xl text-[#0071E3] font-medium">
                      <span className="inline-block text-[#454545]">
                        Front End Developer and Robotics Engineer at
                      </span>{" "}
                      RoboticsLab
                    </h2>
                    <strong className="inline-block font-normal text-sm text-[#454545] tracking-wide">
                      July 2022 - Present
                    </strong>
                    <ul className="space-y-3 mt-6">
                      <li className="flex items-start">
                        <BiCaretRight className="w-4 h-4 text-[#0071E3] mt-1 mr-2" />
                        <span className="inline-block max-w-[500px] w-full text-[#454545]">
                          During my time at Robotics Lab, I had the unique
                          opportunity to work in the Robotics Lab, where I
                          expanded my skill set and discovered a passion for
                          robotics. This role provided me with diverse learning
                          experiences and professional growth.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <BiCaretRight className="w-4 h-4 text-[#0071E3] mt-1 mr-2" />
                        <span className="inline-block max-w-[500px] w-full text-[#454545]">
                          Exploring Frontend Libraries and Robotics: In the
                          Robotics Lab, I delved into various frontend
                          development libraries, broadening my technical
                          knowledge. This experience also sparked my passion for
                          robotics, leading me to learn C, C++, Python, and ROS
                          alongside my frontend development duties.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <BiCaretRight className="w-4 h-4 text-[#0071E3] mt-1 mr-2" />
                        <span className="inline-block max-w-[500px] w-full text-[#454545]">
                          Version Control and Collaboration on GitHub: I learned
                          how to work effectively with a team using GitHub. This
                          included managing branches, conducting code reviews,
                          and ensuring smooth integration of code changes, which
                          are crucial for collaborative development.
                        </span>
                      </li>
                    </ul>
                  </>
                ) : (
                  ""
                )}
                {active3 ? (
                  <>
                    <h2 className="text-xl text-[#0071E3] font-medium">
                      <span className="inline-block text-[#454545]">
                        Co-Founder of
                      </span>{" "}
                      Codebridge School
                    </h2>
                    <strong className="inline-block font-normal text-sm text-[#454545] tracking-wide">
                      April 2023 - Present
                    </strong>
                    <ul className="space-y-3 mt-6">
                      <li className="flex items-start">
                        <BiCaretRight className="w-4 h-4 text-[#0071E3] mt-1 mr-2" />
                        <span className="inline-block max-w-[500px] w-full text-[#454545]">
                          🏢 Codebridge School is non-profit organization
                          dedicated to providing free Coding and English
                          language education to local children. Our mission is
                          to empower the next generation of learners with the
                          skills and knowledge they need to succeed in today's
                          digital world.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <BiCaretRight className="w-4 h-4 text-[#0071E3] mt-1 mr-2" />
                        <span className="inline-block max-w-[500px] w-full text-[#454545]">
                          🗽 English Language
                        </span>
                      </li>
                      <li className="flex items-start">
                        <BiCaretRight className="w-4 h-4 text-[#0071E3] mt-1 mr-2" />
                        <span className="inline-block max-w-[500px] w-full text-[#454545]">
                          💻 IT (Frontend development)
                        </span>
                      </li>
                    </ul>
                  </>
                ) : (
                  ""
                )}
                {active4 ? (
                  <>
                    <h2 className="text-xl text-[#0071E3] font-medium">
                      <span className="inline-block text-[#454545]">
                        Frontent Developer at
                      </span>{" "}
                      Tragon
                    </h2>
                    <strong className="inline-block font-normal text-sm text-[#454545] tracking-wide">
                      May - September 2023
                    </strong>
                    <ul className="space-y-3 mt-6">
                      <li className="flex items-start">
                        <BiCaretRight className="w-4 h-4 text-[#0071E3] mt-1 mr-2" />
                        <span className="inline-block max-w-[500px] w-full text-[#454545]">
                          Remote Team Collaboration: Working with a team from a
                          distance was a key aspect of this role, allowing me to
                          develop and refine my remote collaboration skills.
                          This experience taught me how to effectively
                          communicate, coordinate tasks, and maintain
                          productivity despite physical distance.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <BiCaretRight className="w-4 h-4 text-[#0071E3] mt-1 mr-2" />
                        <span className="inline-block max-w-[500px] w-full text-[#454545]">
                          Project Development: The generator sales project
                          required a comprehensive understanding of customer
                          needs and technical requirements. I gained valuable
                          experience in designing and implementing a seamless
                          user interface that enhanced the buying experience.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <BiCaretRight className="w-4 h-4 text-[#0071E3] mt-1 mr-2" />
                        <span className="inline-block max-w-[500px] w-full text-[#454545]">
                          Time Management and Responsibility: Being part of a
                          project with significant impact required me to manage
                          my time effectively and take full responsibility for
                          my tasks. This experience reinforced the importance of
                          accountability and meeting project deadlines.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <BiCaretRight className="w-4 h-4 text-[#0071E3] mt-1 mr-2" />
                        <span className="inline-block max-w-[500px] w-full text-[#454545]">
                          Customer-Centric Design: The project emphasized the
                          importance of creating user-friendly solutions. I
                          learned how to gather and incorporate user feedback,
                          ensuring the final product met customer expectations
                          and provided an optimal user experience.
                        </span>
                      </li>
                    </ul>
                  </>
                ) : (
                  ""
                )}
                {active5 ? (
                  <>
                    <h2 className="text-xl text-[#0071E3] font-medium">
                      <span className="inline-block text-[#454545]">
                        Co-Founder of
                      </span>{" "}
                      VistaWave
                    </h2>
                    <strong className="inline-block font-normal text-sm text-[#454545] tracking-wide">
                      Yanuary 2024 - Present
                    </strong>
                    <ul className="space-y-3 mt-6">
                      <li className="flex items-start">
                        <BiCaretRight className="w-4 h-4 text-[#0071E3] mt-1 mr-2" />
                        <span className="inline-block max-w-[500px] w-full text-[#454545]">
                          🏢 At VistaWave, we excel in delivering top-notch IT
                          services and consulting solutions tailored for large
                          enterprises. Our goal is to help businesses establish
                          a strong and effective online presence. Our
                          specialized services include:
                        </span>
                      </li>
                      <li className="flex items-start">
                        <BiCaretRight className="w-4 h-4 text-[#0071E3] mt-1 mr-2" />
                        <span className="inline-block max-w-[500px] w-full text-[#454545]">
                          🌐 Web Development: We build dynamic, responsive
                          websites designed to engage users and drive business
                          growth.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <BiCaretRight className="w-4 h-4 text-[#0071E3] mt-1 mr-2" />
                        <span className="inline-block max-w-[500px] w-full text-[#454545]">
                          📱 Mobile Development: Our team creates powerful
                          Android applications that meet your specific business
                          needs.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <BiCaretRight className="w-4 h-4 text-[#0071E3] mt-1 mr-2" />
                        <span className="inline-block max-w-[500px] w-full text-[#454545]">
                          🖥️ WordPress Solutions: We provide end-to-end
                          WordPress development, ensuring your site is robust,
                          secure, and user-friendly.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <BiCaretRight className="w-4 h-4 text-[#0071E3] mt-1 mr-2" />
                        <span className="inline-block max-w-[500px] w-full text-[#454545]">
                          🎨 UX/UI Design: Our expert designers develop
                          intuitive and attractive user interfaces and
                          experiences that enhance user satisfaction. At
                          VistaWave, we are committed to innovation and
                          excellence, ensuring that our IT solutions are of the
                          highest quality, scalable, and tailored to your unique
                          business objectives.
                        </span>
                      </li>
                    </ul>
                  </>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
