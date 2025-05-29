import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import Links from "./Links";

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

    // Create particles
    const createParticles = () => {
      for (let i = 0; i < 20; i++) {
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
        trigger: footer,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
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
      { y: 100, opacity: 0, scale: 0.9, rotationX: -15 },
      { y: 0, opacity: 1, scale: 1, rotationX: 0, duration: 1.2, ease: "power3.out" }
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
      "-=0.8"
    );

    tl.fromTo(
      bigThing,
      { scale: 0.5, opacity: 0, rotationY: -180 },
      { scale: 1, opacity: 1, rotationY: 0, duration: 1, ease: "elastic.out(1, 0.5)" },
      "-=0.5"
    );

    tl.fromTo(
      links,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
      "-=0.3"
    );

    const bigThingHover = () => {
      gsap.to(bigThing, { scale: 1.1, rotationY: 5, duration: 0.3, ease: "power2.out" });
    };
    const bigThingLeave = () => {
      gsap.to(bigThing, { scale: 1, rotationY: 0, duration: 0.3, ease: "power2.out" });
    };

    bigThing.addEventListener("mouseenter", bigThingHover);
    bigThing.addEventListener("mouseleave", bigThingLeave);

    gsap.to(footer, {
      backgroundPosition: "200% 0%",
      duration: 8,
      repeat: -1,
      ease: "none",
    });

    return () => {
      bigThing.removeEventListener("mouseenter", bigThingHover);
      bigThing.removeEventListener("mouseleave", bigThingLeave);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <footer
      ref={footerRef}
      className="relative text-center py-16 px-6 m-9 rounded-3xl overflow-hidden shadow-2xl bg-black text-white border border-gray-800"
      style={{
        backgroundSize: "200% 200%",
      }}
    >
      {/* Particles */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none z-0" />

      {/* Glow Decorations */}
      <div className="absolute top-4 left-4 w-20 h-20 bg-gradient-to-br from-gray-400 to-gray-700 rounded-full opacity-10 animate-pulse" />
      <div className="absolute bottom-4 right-4 w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-400 rounded-full opacity-10 animate-pulse" />
      <div className="absolute top-1/2 left-8 w-12 h-12 bg-gradient-to-br from-gray-500 to-gray-700 rounded-full opacity-10 animate-pulse" />

      {/* Main Content */}
      <div className="relative z-10 px-4 ">
        <h2
          ref={titleRef}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight tracking-wide space-x-3"
          style={{ 
            perspective: "1000px",
            fontFamily: "'Bebas Neue', sans-serif",
            letterSpacing: "1px"
          }}
        >
          Let's build the next{" "}
          <span
            ref={bigThingRef}
            className="relative inline-block text-red-600"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              textShadow: "0 0 20px rgba(255, 255, 255, 0.2)",
              letterSpacing: "2px"
            }}
          >
            BIG-THING
            <span className="absolute inset-0 bg-gradient-to-r from-white to-gray-400 opacity-10 blur-lg -z-10" />
          </span>{" "}
          together
        </h2>

        <div ref={linksRef} className="flex justify-center mt-10">
          <Links />
        </div>
      </div>

      {/* Line Glow */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 blur-sm" />
    </footer>
  );
};

export default Footer;