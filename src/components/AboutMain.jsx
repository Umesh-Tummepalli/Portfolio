import React, { useRef, useEffect } from "react";
import mainPhoto from "../assets/mainPhoto.jpg";
import SlidingContent from "./Sliding";
import TiltContainer from "./TiltContainer";
import gsap from "gsap";
import Button from "./Button";
import { FaLinux } from "react-icons/fa";
import { SiC, SiCplusplus, SiExpress } from "react-icons/si";
import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiJava,
  DiNodejsSmall,
} from "react-icons/di";
import { GrReactjs } from "react-icons/gr";
import { SiTailwindcss } from "react-icons/si";
import Resume from "../assets/Resume.pdf";
import { useGSAP } from "@gsap/react";
import HoverName from "./HoverName";
const AboutMain = () => {
  const moveElRef = useRef();
  const containerRef = useRef();
  const imgRef = useRef();
  const headingRef = useRef();
  const pref = useRef();
  function handleMouseMove(el) {
    let xpos = el.clientX;
    let ypos = el.clientY;
    let boxPos = containerRef.current.getBoundingClientRect();
    let cursorXpos = xpos - boxPos.left;
    let cursorYpos = ypos - boxPos.top;
    gsap.to(moveElRef.current, {
      x: cursorXpos,
      y: cursorYpos,
    });
  }
  useEffect(() => {
    document.title = "About - Umesh";
  }, []);
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(containerRef.current, {
      y: -1000,
      scale: 0,
      duration: 1,
      ease: "back.out",
    });
    tl.from(imgRef.current, {
      x: "-100%",
      ease: "back.out",
    });
    tl.from(headingRef.current, {
      x: "200%",
      ease: "back.out",
    });
    tl.from(pref.current, {
      y: "-110%",
      filter: "blur(20px)",
      opacity: 0,
      duration: 1.5,
      ease: "back.out",
    });
  });
  return (
    <div className="text-white p-4" id="aboutMain">
      <TiltContainer>
        <section
          className="lg:m-10 flex flex-col  lg:flex-row backdrop-blur-[10px] backdrop-saturate-150 z-10 bg-white/10 border border-white/20 rounded-3xl shadow-xl relative overflow-hidden "
          onMouseMove={handleMouseMove}
          ref={containerRef}
        >
          <section
            className="w-full lg:w-1/2 p-5 overflow-hidden"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            <h2 className="text-4xl font-bold border-b-1  " ref={headingRef}>
              About Me
            </h2>
            <div className="overflow-hidden">
              <section className="space-y-2  pt-4 aboutPara" ref={pref}>
                <p>
                  Hi, I'm{" "}
                  <span className="text-teal-400  sm:whitespace-nowrap font-semibold">
                    Umesh Tummepalli
                  </span>{" "}
                  — a passionate{" "}
                  <span className="text-teal-400 sm:whitespace-nowrap ">
                    Front-End Developer
                  </span>{" "}
                  and Computer Science undergrad specializing in{" "}
                  <span className="text-teal-400 sm:whitespace-nowrap">
                    Cyber Security
                  </span>{" "}
                  at{" "}
                  <span className="text-teal-400 sm:whitespace-nowrap">
                    SRM University
                  </span>
                  . I build intuitive and enjoyable web applications.
                </p>
                <p>
                  With hands-on experience in{" "}
                  <span className="text-teal-400 sm:whitespace-nowrap">
                    HTML, CSS, JavaScript, React
                  </span>
                  , and{" "}
                  <span className="text-teal-400 sm:whitespace-nowrap">
                    Tailwind CSS
                  </span>
                  , I’ve developed projects like a responsive portfolio, recipe
                  search apps, and an intelligent{" "}
                  <span className="text-teal-400 sm:whitespace-nowrap">
                    Tic Tac Toe powered by the Minimax algorithm
                  </span>
                  . I also created a{" "}
                  <span className="text-teal-400 sm:whitespace-nowrap">
                    Virtual Study Environment
                  </span>
                  , a full-stack task management system.
                </p>
                <p>
                  Beyond front-end, I actively practice{" "}
                  <span className="text-teal-400 sm:whitespace-nowrap">
                    Data Structures & Algorithms (DSA)
                  </span>{" "}
                  with over{" "}
                  <span className="text-teal-400 sm:whitespace-nowrap">
                    150+ LeetCode problems
                  </span>{" "}
                  solved. I'm expanding my skills into back-end development with{" "}
                  <span className="text-teal-400 sm:whitespace-nowrap">
                    Node.js
                  </span>{" "}
                  and{" "}
                  <span className="text-teal-400 sm:whitespace-nowrap">
                    MongoDB
                  </span>
                  , aiming to become a proficient{" "}
                  <span className="text-teal-400 sm:whitespace-nowrap">
                    full-stack developer
                  </span>
                  .
                </p>
                <p>
                  I love turning ideas into polished digital experiences,
                  whether it's implementing{" "}
                  <span className="text-teal-400 sm:whitespace-nowrap">
                    AI chatbots using the Mistral API
                  </span>
                  , experimenting with{" "}
                  <span className="text-teal-400 sm:whitespace-nowrap">
                    GSAP animations
                  </span>
                  , or optimizing performance. I'm proficient with{" "}
                  <span className="text-teal-400 sm:whitespace-nowrap">
                    Git/GitHub
                  </span>{" "}
                  and comfortable across{" "}
                  <span className="text-teal-400 sm:whitespace-nowrap">
                    Linux
                  </span>{" "}
                  and{" "}
                  <span className="text-teal-400 sm:whitespace-nowrap">
                    Windows
                  </span>{" "}
                  environments.
                </p>
                <p>
                  <span className="text-teal-400 sm:whitespace-nowrap font-semibold">
                    Curious
                  </span>{" "}
                  by nature and{" "}
                  <span className="text-teal-400 sm:whitespace-nowrap font-semibold">
                    driven by results
                  </span>
                  , I'm always exploring, building, and refining my development
                  and problem-solving skills.
                </p>
              </section>
            </div>
            <a
              target="_blank"
              href={Resume}
              className="lg:text-end block   mt-9  w-full text-center"
            >
              <Button classes="text-wrap px-5">Download My Resume</Button>
            </a>
          </section>
          <div className="lg:w-1/2 overflow-hidden">
            <img
              src={mainPhoto}
              alt=""
              className="w-full  object-cover h-full"
              ref={imgRef}
            />
          </div>
          <div
            className="absolute p-20 bg-green-500 rounded-full blur-3xl -z-10 -translate-x-1/2 -translate-y-1/2"
            ref={moveElRef}
          ></div>
        </section>
      </TiltContainer>
      <section className="p-4 rounded-3xl backdrop-blur-3xl backdrop-saturate-150 bg-white/10 border-white/20 border-1 m-4 text-4xl ">
        <SlidingContent pauseOnHover={false}>
          <HoverName name="ReactJS">
            <GrReactjs />
          </HoverName>
          <HoverName name="HTML5">
            <DiHtml5 />
          </HoverName>
          <HoverName name="CSS3">
            <DiCss3 />
          </HoverName>
          <HoverName name="JavaScript">
            <DiJsBadge />
          </HoverName>
          <HoverName name="Tailwind CSS">
            <SiTailwindcss />
          </HoverName>
          <HoverName name="Java">
            <DiJava />
          </HoverName>
          <HoverName name="Node.js">
            <DiNodejsSmall />
          </HoverName>
          <HoverName name="Linux">
            <FaLinux />
          </HoverName>
          <HoverName name="C">
            <SiC />
          </HoverName>
          <HoverName name="C++">
            <SiCplusplus />
          </HoverName>
          <HoverName name="ExpressJS">
            <SiExpress />
          </HoverName>
        </SlidingContent>
      </section>

      <section className="flex md:flex-row md:justify-around flex-col justify-center items-center">
        <section
          className="p-4 rounded-2xl backdrop-blur-3xl backdrop-saturate-150 bg-white/10 border-white/20 border-1 m-4 w-fit flex justify-between items-center"
          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
        >
          <p className="pr-4 border-r-1 text-3xl">Coding Profiles</p>
          <a
            target="_blank"
            href="https://leetcode.com/u/umesh96/"
            className="p-2 border-1 rounded-md border-white/50 hover:bg-amber-50 hover:text-black duration-300 mx-1"
          >
            Leetcode
          </a>
          <a
            target="_blank"
            href="https://www.geeksforgeeks.org/user/umeshtummu16z/"
            className="p-2 border-1 rounded-md border-white/50 hover:bg-amber-50 hover:text-black duration-300 mx-1"
          >
            geeksforgeeks
          </a>
        </section>
        <section
          className="p-4 rounded-2xl backdrop-blur-3xl backdrop-saturate-150 bg-white/10 border-white/20 border-1 m-4 w-fit flex justify-between items-center"
          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
        >
          <p className="text-4xl">Let's Build Something Amazing Together.</p>
        </section>
        <section
          className="p-4 rounded-2xl backdrop-blur-3xl backdrop-saturate-150 bg-white/10 border-white/20 border-1 m-4 w-fit flex justify-between items-center"
          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
        >
          <p className="pr-4 border-r-1 text-3xl">Iam Available On</p>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/umesh-tummepalli-924362333/"
            className="p-2 border-1 rounded-md border-white/50 hover:bg-amber-50 hover:text-black duration-300 mx-1"
          >
            <i className="ri-linkedin-fill"></i>
          </a>
          <a
            target="_blank"
            href="https://github.com/Umesh-Tummepalli"
            className="p-2 border-1 rounded-md border-white/50 hover:bg-amber-50 hover:text-black duration-300 mx-1"
          >
            <i className="ri-github-line"></i>
          </a>
          <a
            target="_blank"
            href="https://www.instagram.com/umesh_tummepalli/"
            className="p-2 border-1 rounded-md border-white/50 hover:bg-amber-50 hover:text-black duration-300 mx-1"
          >
            <i className="ri-instagram-line"></i>
          </a>
          <a
            target="_blank"
            href="mailto:umeshtummepallioff3@gmail.com"
            className="p-2 border-1 rounded-md border-white/50 hover:bg-amber-50 hover:text-black duration-300 mx-1"
          >
            <i className="ri-mail-fill"></i>
          </a>
        </section>
      </section>
    </div>
  );
};

export default AboutMain;
