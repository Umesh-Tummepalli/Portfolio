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
      const count = window.innerWidth < 640 ? 8 : 20;
      for (let i = 0; i < count; i++) {
        const particle = document.createElement("div");
        particle.className = "particle absolute w-2 h-2 bg-white rounded-full";
        particles.appendChild(particle);

        gsap.set(particle, {
          x: Math.random() * window.innerWidth,
          y: Math.random() * 200,
          scale: Math.random() * 0.5 + 0.5,
          opacity: Math.random() * 0.3 + 0.1,
        });

        gsap.to(particle, {
          y: "-=100",
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

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: 'footer',
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
      { y: 150, opacity: 0, scale: 0.95, filter: "blur(10px)" },
      { y: 0, opacity: 1, scale: 1, filter: "blur(0px)", ease: "power2.out" }
    );

    tl.to(
      title.children,
      {
        opacity: 1,
        y: 0,
        rotationX: 0,
        duration: 1,
        stagger: 0.1,
        ease: "back.out(1.7)",
      },
      "<"
    );

    tl.fromTo(
      bigThing,
      { scale: 0.5, opacity: 0, rotationY: -180 },
      { scale: 1, opacity: 1, rotationY: 0, ease: "elastic.out(1, 0.5)" },
      "<+0.2"
    );

    tl.fromTo(
      links,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, ease: "power2.out" },
      "<+0.1"
    );

    const bigThingHover = () => {
      gsap.to(bigThing, { scale: 1.1, rotationY: 5, duration: 0.3, ease: "power2.out" });
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
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <footer
      ref={footerRef}
      className="relative text-center py-16 px-4 sm:px-6 lg:px-12 m-4 sm:m-6 lg:m-9 rounded-3xl overflow-hidden shadow-2xl 
        bg-white/10 text-white border border-gray-800 backdrop-blur-md backdrop-saturate-150 flex justify-center items-center flex-col"
      style={{ backgroundSize: "200% 200%" }}
    >
      {/* Particles */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none z-0 hidden sm:block" />

      {/* Glow Decorations */}
      <div className="absolute top-4 left-4 w-20 h-20 bg-gradient-to-br from-gray-400 to-gray-700 rounded-full opacity-10 animate-pulse hidden sm:block" />
      <div className="absolute bottom-4 right-4 w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-400 rounded-full opacity-10 animate-pulse hidden sm:block" />
      <div className="absolute top-1/2 left-8 w-12 h-12 bg-gradient-to-br from-gray-500 to-gray-700 rounded-full opacity-10 animate-pulse hidden sm:block" />

      {/* Main Content */}
      <div className="relative px-4">
        <h2
          ref={titleRef}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-6 sm:mb-8 leading-tight tracking-wide space-x-3"
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
              textShadow: "0 0 20px rgba(255, 255, 255, 0.2)",
              letterSpacing: "2px",
            }}
          >
            BIG-THING
            <span className="absolute inset-0 bg-gradient-to-r from-white to-gray-400 opacity-10 blur-lg -z-10" />
          </span>{" "}
          together
        </h2>

        <div className="flex justify-center items-center flex-wrap gap-4">
          <Logo />
        </div>

        <div ref={linksRef} className="flex justify-center flex-wrap mt-6 sm:mt-10 gap-4">
          <Links />
        </div>
      </div>

      {/* Line Glow */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 blur-sm" />
    </footer>
  );
};

export default Footer;
