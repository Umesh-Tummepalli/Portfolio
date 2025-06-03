import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import Links from "./Links";
import Logo from "../app/Logo";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);
  const titleRef = useRef(null);
  const bigThingRef = useRef(null);
  const linksRef = useRef(null);
  const particlesRef = useRef(null);

  useEffect(() => {
    const footer = footerRef.current;
    const title = titleRef.current;
    const bigThing = bigThingRef.current;
    const links = linksRef.current;
    const particles = particlesRef.current;

    if (!footer || !title || !bigThing || !links || !particles) return;

    const createParticles = () => {
      // Clear existing particles
      particles.innerHTML = '';
      
      const count = window.innerWidth < 640 ? 5 : 15;
      for (let i = 0; i < count; i++) {
        const particle = document.createElement("div");
        particle.className = "particle absolute w-1 h-1 sm:w-2 sm:h-2 bg-white rounded-full";
        particles.appendChild(particle);

        gsap.set(particle, {
          x: Math.random() * window.innerWidth,
          y: Math.random() * (window.innerWidth < 640 ? 100 : 200),
          scale: Math.random() * 0.5 + 0.5,
          opacity: Math.random() * 0.3 + 0.1,
        });

        gsap.to(particle, {
          y: `-=${window.innerWidth < 640 ? 50 : 100}`,
          rotation: Math.random() * 360,
          duration: Math.random() * 3 + 2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: Math.random() * 2,
        });
      }
    };

    createParticles();
    window.addEventListener('resize', createParticles);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: footer,
        start: "top 80%",
      },
    });

    const titleText = title.textContent || "";
    const words = titleText.split(" ");
    title.innerHTML = "";

    words.forEach((word) => {
      const span = document.createElement("span");
      span.textContent = word + " ";
      span.style.display = "inline-block";
      span.style.opacity = "0";
      title.appendChild(span);
    });

    tl.fromTo(
      footer,
      { y: 100, opacity: 0, scale: 0.95, filter: "blur(5px)" },
      { y: 0, opacity: 1, scale: 1, filter: "blur(0px)", ease: "power2.out", duration: 0.8 }
    );

    tl.to(
      title.children,
      {
        opacity: 1,
        y: 0,
        rotationX: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "back.out(1.7)",
      },
      "<"
    );

    tl.fromTo(
      bigThing,
      { scale: 0.5, opacity: 0, rotationY: -180 },
      { scale: 1, opacity: 1, rotationY: 0, ease: "elastic.out(1, 0.5)", duration: 1.2 },
      "<+0.2"
    );

    tl.fromTo(
      links,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, ease: "power2.out", duration: 0.6 },
      "<+0.1"
    );

    const bigThingHover = () => {
      gsap.to(bigThing, { scale: 1.05, rotationY: 5, duration: 0.3, ease: "power2.out" });
    };
    const bigThingLeave = () => {
      gsap.to(bigThing, { scale: 1, rotationY: 0, duration: 0.3, ease: "power2.out" });
    };

    bigThing.addEventListener("mouseenter", bigThingHover);
    bigThing.addEventListener("mouseleave", bigThingLeave);

    if (window.innerWidth > 640) {
      gsap.to(footer, {
        backgroundPosition: "200% 0%",
        duration: 8,
        repeat: -1,
        ease: "none",
      });
    }

    return () => {
      bigThing.removeEventListener("mouseenter", bigThingHover);
      bigThing.removeEventListener("mouseleave", bigThingLeave);
      window.removeEventListener('resize', createParticles);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <footer
      ref={footerRef}
      className="relative text-center py-12 px-4 sm:py-16 sm:px-6 lg:px-12 m-2 sm:mx-4 lg:mx-8 my-8 sm:my-12 rounded-3xl overflow-hidden shadow-lg sm:shadow-2xl 
        bg-white/10 text-white border border-gray-800 backdrop-blur-md backdrop-saturate-150 flex justify-center items-center flex-col "
      style={{ backgroundSize: "200% 200%" }}
    >
      {/* Particles */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none z-0" />

      {/* Glow Decorations - Mobile friendly */}
      <div className="absolute top-2 left-2 w-12 h-12 sm:top-4 sm:left-4 sm:w-20 sm:h-20 bg-gradient-to-br from-gray-400 to-gray-700 rounded-full opacity-10 animate-pulse" />
      <div className="absolute bottom-2 right-2 w-10 h-10 sm:bottom-4 sm:right-4 sm:w-16 sm:h-16 bg-gradient-to-br from-gray-700 to-gray-400 rounded-full opacity-10 animate-pulse" />
      <div className="absolute top-1/2 left-4 w-8 h-8 sm:left-8 sm:w-12 sm:h-12 bg-gradient-to-br from-gray-500 to-gray-700 rounded-full opacity-10 animate-pulse" />

      {/* Main Content */}
      <div className="relative px-4 w-full max-w-4xl">
        <h2
          ref={titleRef}
          className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold mb-4 sm:mb-8 leading-tight tracking-wide"
          style={{
            perspective: "1000px",
            fontFamily: "'Bebas Neue', sans-serif",
            letterSpacing: "1px",
          }}
        >
          Let's build the next{" "}
          <span
            ref={bigThingRef}
            className="relative inline-block text-red-600"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              textShadow: "0 0 10px rgba(255, 255, 255, 0.2)",
              letterSpacing: "2px",
            }}
          >
            BIG-THING
            <span className="absolute inset-0 bg-gradient-to-r from-white to-gray-400 opacity-10 blur-lg -z-10" />
          </span>{" "}
          together
        </h2>

        <div className="w-full h-full mx-auto my-6 text-white flex justify-center">
          <Logo className="w-full h-full max-w-[500px] max-h-[500px]" />
        </div>

        <div ref={linksRef} className="flex justify-center flex-wrap mt-4 sm:mt-8 gap-3 sm:gap-4">
          <Links />
        </div>
      </div>

      {/* Line Glow */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-px sm:h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 sm:opacity-30 blur-sm" />
    </footer>
  );
};

export default Footer;