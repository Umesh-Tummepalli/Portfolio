import React, { useRef } from "react";
import Button from "./Button";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import HoverName from "./HoverName";

// Register the plugin
gsap.registerPlugin(useGSAP);

const Links = () => {
  const divRef = useRef(null);
  const linksRef = useRef([]);

  useGSAP(
    () => {
      if (divRef.current) {
        // Initial animation
        gsap.from(divRef.current, {
          x: "100%",
          duration: 1,
          ease: "power3.out",
        });

        // Additional animations for each button
        gsap.from(linksRef.current, {
          opacity: 0,
          y: 50,
          duration: 1,
          stagger: 0.2,
          ease: "back.out(1.7)",
          delay: 0.5,
        });

        // Animation for the separator lines
        gsap.from(divRef.current.querySelectorAll("span"), {
          scaleX: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          delay: 0.5,
        });
      }
    },
    { scope: divRef }
  );

  return (
    <nav 
      className="w-full md:w-1/2 overflow-hidden"
      aria-label="Social media links"
    >
      <div 
        className="flex justify-around items-center w-full" 
        ref={divRef}
        role="list"
      >
          <a
            href="https://www.linkedin.com/in/umesh-tummepalli-924362333/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Connect with me on LinkedIn"
            ref={el => linksRef.current[0] = el}
            role="listitem"
          >
            <Button classes="px-4 text-2xl">
              <i className="ri-linkedin-fill" aria-hidden="true"></i>
              <span className="sr-only">LinkedIn</span>
            </Button>
          </a>

        <span 
          className="h-0.5 w-1/6 md:w-1/4 bg-gray-500" 
          aria-hidden="true"
        ></span>

          <a
            href="https://github.com/Umesh-Tummepalli"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View my GitHub profile"
            ref={el => linksRef.current[1] = el}
            role="listitem"
          >
            <Button classes="px-4 text-2xl">
              <i className="ri-github-fill" aria-hidden="true"></i>
              <span className="sr-only">GitHub</span>
            </Button>
          </a>

        <span 
          className="h-0.5 w-1/6 md:w-1/4 bg-gray-500" 
          aria-hidden="true"
        ></span>

          <a
            href="mailto:umeshtummepallioff3@gmail.com"
            aria-label="Send me an email"
            ref={el => linksRef.current[2] = el}
            role="listitem"
          >
            <Button classes="px-4 text-2xl">
              <i className="ri-mail-fill" aria-hidden="true"></i>
              <span className="sr-only">Email</span>
            </Button>
          </a>
      </div>
    </nav>
  );
};

export default React.memo(Links);