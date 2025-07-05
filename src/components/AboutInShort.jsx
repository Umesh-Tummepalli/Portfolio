import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SlidingText from "./Sliding";
import TiltContainer from "./TiltContainer";
import Button from "./Button";
import {Link} from "react-router"
// Register plugins - do this outside component or in a separate file
gsap.registerPlugin(ScrollTrigger);

const AboutInShort = () => {
  const textRef = useRef([]);
  const containerRef = useRef(null);

  useGSAP(
    () => {
      // Ensure elements exist before animating
      if (!textRef.current || textRef.current.length === 0) return;

      // Filter out null/undefined elements
      const validElements = textRef.current.filter(el => el !== null && el !== undefined);
      
      if (validElements.length === 0) return;

      // Set initial state
      gsap.set(validElements, { opacity: 0 });

      // Create animation
      gsap.to(validElements, {
          opacity: 1,
          stagger: 0.2,
          duration:1,
          ease: "power2.out",
          filter:"blur(0)",
          scrollTrigger: {
              trigger: containerRef.current,
              start: "top 70%",
              end: "top 15%",
              scrub: 1,
            //   markers: true, // Set to true for debugging
            },
      });
    },
    { scope: containerRef, dependencies: [] }
  );

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars.trigger === containerRef.current) {
          trigger.kill();
        }
      });
    };
  }, []);

  return (
    <section
  ref={containerRef}
  className="about-container relative w-full px-4 py-16 bg-transparent"
  style={{ fontFamily: "'Poppins', sans-serif" }}
  itemScope
  itemType="https://schema.org/Person"
>
  <div className="flex items-center justify-center relative">
    {/* Sliding background - decorative only */}
    <div 
      className="absolute top-1/2 left-0 -translate-y-1/2 w-full overflow-hidden pointer-events-none z-10 font-extrabold"
      aria-hidden="true"
    >
      <SlidingText onHoverEffect={false} speed={100}>
        <p 
          className="text-9xl md:text-[25rem] opacity-10 whitespace-nowrap text-white uppercase"
          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
        >
          About Me About Me About Me About Me
        </p>
      </SlidingText>
    </div>

    {/* Main content card */}
    <TiltContainer className="z-20 flex justify-center w-" tiltIntensity={30}>
      <article 
        className="relative max-w-5xl w-full backdrop-blur-[10px] backdrop-saturate-150 bg-white/10 border border-white/20 rounded-3xl shadow-xl text-white px-6 py-10 sm:px-10 sm:py-14 text-base sm:text-lg md:text-xl leading-relaxed"
        itemScope
        itemProp="description"
      >
        <h1
          className="text-center text-3xl md:text-4xl font-bold mb-6"
          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          itemProp="name"
        >
          ABOUT ME
        </h1>
        <p
          className="text-center"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          {`Hi there! I'm Umesh Tummepalli, a passionate Computer Science student at SRM Institute of Science and Technology, specializing in Cyber Security. I love building interactive and intuitive user experiences with React.js, and I'm expanding my skills into Node.js, MongoDB, and full-stack development. My experience spans from crafting sleek front-end interfaces to deploying real-world projects, and I enjoy exploring AI, game theory, and system-level programming with C/C++. I'm driven by curiosity, creativity, and a desire to solve real-world problems through tech. Let's build something awesome together!`
            .split(" ")
            .map((char, index) => (
              <span
                key={index}
                className="inline-block blur-[5px] ml-1"
                ref={(el) => {
                  if (el) textRef.current[index] = el;
                }}
                aria-hidden="true"
              >
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          {/* Visible text for SEO and accessibility */}
          <span className="sr-only">
            Hi there! I'm Umesh Tummepalli, a passionate Computer Science student at SRM Institute of Science and Technology, specializing in Cyber Security. I love building interactive and intuitive user experiences with React.js, and I'm expanding my skills into Node.js, MongoDB, and full-stack development. My experience spans from crafting sleek front-end interfaces to deploying real-world projects, and I enjoy exploring AI, game theory, and system-level programming with C/C++. I'm driven by curiosity, creativity, and a desire to solve real-world problems through tech. Let's build something awesome together!
          </span>
        </p>
        <div className="text-end mt-6">
          <Link to="/about" aria-label="Learn more about Umesh Tummepalli">
            <Button>Know More</Button>
          </Link>
        </div>
      </article>
    </TiltContainer>
  </div>
</section>
  );
};

export default AboutInShort;