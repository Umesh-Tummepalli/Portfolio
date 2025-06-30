import React, { useRef, useState } from "react";
import { Outlet, NavLink } from "react-router-dom";
import Footer from "./Footer";
import Cursor from "./Cursor";
import ScrollToTop from "../app/ScrollToTop";
import Logo from "../app/Logo";
import AnimatedButton from "./AnimatedButton";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef();
  const buttonRef = useRef();

  useGSAP(() => {
    gsap.to(navRef.current, {
      filter: 'blur(0px)',
      duration: 1,
      ease: "back.out",
    });
  }, { scope: navRef });

  return (
    <>
      <ScrollToTop>
        {/* Mobile menu button with better accessibility */}
        <div className="lg:hidden top-0 left-0 text-white z-[100]">
          <AnimatedButton 
            isOpen={isOpen} 
            setIsOpen={setIsOpen}
            ref={buttonRef}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            aria-controls="main-navigation"
          />
        </div>

        {/* Main navigation with proper ARIA attributes */}
        <nav 
          id="main-navigation"
          className={`z-60 text-white lg:max-h-[1000px] overflow-hidden duration-1000 ease-linear transition-all blur-2xl ${isOpen ? "max-h-[1000px]" : "max-h-0"}`}
          ref={navRef}
          aria-label="Main navigation"
        >
          <div 
            className="bg-white/10 border-1 border-white/20 backdrop-blur-2xl backdrop-saturate-200 py-4 px-8 rounded-2xl z-[100] top-0 w-[90%] mx-auto flex lg:justify-around flex-col justify-center items-center gap-5 lg:flex-row mt-1.5"
            style={{ fontFamily: "'Poppins'" }}
            role="menubar"
          >
            <NavLink 
              to="/" 
              className={({ isActive }) => `text-xl pb-1 group relative ${isActive && "border-b-1"} w-fit`}
              role="menuitem"
              aria-current={({ isActive }) => isActive ? "page" : undefined}
            >
              Home
              <span 
                className="inline-block h-1 bg-white absolute bottom-0 left-0 duration-300 w-full scale-x-0 transition-transform group-hover:scale-x-100 group-hover:origin-left origin-right rounded-full"
                aria-hidden="true"
              ></span>
            </NavLink>
            
            <NavLink 
              to="about" 
              className={({ isActive }) => `text-xl pb-1 group relative ${isActive && "border-b-1"}`}
              role="menuitem"
              aria-current={({ isActive }) => isActive ? "page" : undefined}
            >
              About Me
              <span 
                className="inline-block h-1 bg-white absolute bottom-0 left-0 duration-300 w-full scale-x-0 transition-transform group-hover:scale-x-100 group-hover:origin-left origin-right rounded-full"
                aria-hidden="true"
              ></span>
            </NavLink>
            
            <NavLink 
              to="projects" 
              className={({ isActive }) => `text-xl pb-1 group relative ${isActive && "border-b-1"}`}
              role="menuitem"
              aria-current={({ isActive }) => isActive ? "page" : undefined}
            >
              Projects
              <span 
                className="inline-block h-1 bg-white absolute bottom-0 left-0 duration-300 w-full scale-x-0 transition-transform group-hover:scale-x-100 group-hover:origin-left origin-right rounded-full"
                aria-hidden="true"
              ></span>
            </NavLink>
          </div>
        </nav>

        <Cursor />
        <main>
          <Outlet />
        </main>
        <Footer />
      </ScrollToTop>
    </>
  );
};

export default NavBar;