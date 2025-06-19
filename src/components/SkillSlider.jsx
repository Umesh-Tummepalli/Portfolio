import React from 'react';
import SlidingContent from './Sliding';
import { FaLinux } from "react-icons/fa";
import { SiC, SiCplusplus, SiExpress, SiTailwindcss } from "react-icons/si";
import { GrReactjs } from "react-icons/gr";
import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiJava,
  DiNodejsSmall,
} from "react-icons/di";

const SkillSlider = () => {
  return (
    <section className="p-4 rounded-3xl backdrop-blur-3xl backdrop-saturate-150 bg-white/10 border-white/20 border-1 m-4 text-4xl">
      <SlidingContent speed={150}>
        <div className="flex items-center gap-2 border-1 border-white/20 p-2 rounded-xl hover:bg-amber-50 hover:text-black duration-300">
          <GrReactjs />
          <span className="text-xl">ReactJS</span>
        </div>
        <div className="flex items-center gap-2 border-1 border-white/20 p-2 rounded-xl hover:bg-amber-50 hover:text-black duration-300">
          <DiHtml5 />
          <span className="text-xl">HTML5</span>
        </div>
        <div className="flex items-center gap-2 border-1 border-white/20 p-2 rounded-xl hover:bg-amber-50 hover:text-black duration-300">
          <DiCss3 />
          <span className="text-xl">CSS3</span>
        </div>
        <div className="flex items-center gap-2 border-1 border-white/20 p-2 rounded-xl hover:bg-amber-50 hover:text-black duration-300">
          <DiJsBadge />
          <span className="text-xl">JavaScript</span>
        </div>
        <div className="flex items-center gap-2 border-1 border-white/20 p-2 rounded-xl hover:bg-amber-50 hover:text-black duration-300">
          <SiTailwindcss />
          <span className="text-xl">Tailwind CSS</span>
        </div>
        <div className="flex items-center gap-2 border-1 border-white/20 p-2 rounded-xl hover:bg-amber-50 hover:text-black duration-300">
          <DiJava />
          <span className="text-xl">Java</span>
        </div>
        <div className="flex items-center gap-2 border-1 border-white/20 p-2 rounded-xl hover:bg-amber-50 hover:text-black duration-300">
          <DiNodejsSmall />
          <span className="text-xl">Node.js</span>
        </div>
        <div className="flex items-center gap-2 border-1 border-white/20 p-2 rounded-xl hover:bg-amber-50 hover:text-black duration-300">
          <FaLinux />
          <span className="text-xl">Linux</span>
        </div>
        <div className="flex items-center gap-2 border-1 border-white/20 p-2 rounded-xl hover:bg-amber-50 hover:text-black duration-300">
          <SiC />
          <span className="text-xl">C</span>
        </div>
        <div className="flex items-center gap-2 border-1 border-white/20 p-2 rounded-xl hover:bg-amber-50 hover:text-black duration-300">
          <SiCplusplus />
          <span className="text-xl">C++</span>
        </div>
        <div className="flex items-center gap-2 border-1 border-white/20 p-2 rounded-xl hover:bg-amber-50 hover:text-black duration-300">
          <SiExpress />
          <span className="text-xl">ExpressJS</span>
        </div>
      </SlidingContent>
    </section>
  );
}

export default SkillSlider;
