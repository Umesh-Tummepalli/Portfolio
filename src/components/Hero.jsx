import React, { useRef } from "react";
import Name from "./Name";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import mainImage from "../assets/Main-Scene.gif";
import TiltImage from "./TiltImage";
import Button from "./Button";
import Links from "./Links";
import Resume from "../assets/Resume.pdf"
// Register the plugin
gsap.registerPlugin(useGSAP);

const Hero = () => {
  const titleRef = useRef([]);
  const imgContainerRef = useRef(null);
  const titles = ["A Web Dev.", "Problem Solver", "React Dev."];

  useGSAP(() => {
    // Animation for titles
    gsap.from(titleRef.current, {
      x: -100,
      opacity: 0,
      stagger: 0.2,
      duration: 0.8,
      ease: "back.out(1.7)",
      delay: 0.3,
    });

    // Animation for image container
    gsap.from(imgContainerRef.current, {
      y: 100,
      opacity: 0,
      duration: 1.5,
      ease: "elastic.out(1, 0.75)",
      delay: 0.5,
    });

    // Additional animation for a subtle bounce effect on the image
    gsap.to(imgContainerRef.current, {
      y: -10,
      duration: 2,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
      delay: 1.5,
    });
  }, []);

  return (
    <main> {/* Wrapped in main landmark for better document structure */}
      <section className="sm:w-full w-[95vw] flex p-10 items-center justify-between flex-col md:flex-row overflow-hidden">
        <header className="text-[9.3vw] font-[1000] m-0 leading-[1] sm:leading-[0.8] text-center sm:text-start"> {/* Changed to header */}
          <h1 ref={(el) => (titleRef.current[0] = el)} aria-label="Introduction">
            <Name text={"HI, I'm Umesh"} />
          </h1>
          <div role="contentinfo" aria-label="Professional titles"> {/* Added ARIA attributes */}
            {titles.map((title, index) => (
              <h2 key={index} ref={(el) => (titleRef.current[index + 1] = el)}> {/* Changed to h2 for proper heading hierarchy */}
                <Name text={title} />
              </h2>
            ))}
          </div>
        </header>

        <aside ref={imgContainerRef} className="md:w-[40vw] md:max-w-[600px] perspective-1000 w-full mt-8"> {/* Changed to aside */}
          <figure> {/* Wrapped image in figure */}
            <TiltImage
              src={mainImage}
              alt="Umesh's professional illustration showcasing web development skills"
              classes="rounded-4xl w-full h-auto bg-white p-4 shadow-xl"
              tiltIntensity={50}
            />
          </figure>
          <a href={Resume} target="_blank" rel="noopener noreferrer" aria-label="Download Umesh's resume">
            <Button classes="w-full text-xl mt-5 font-[Poppins]">View My Resume</Button>
          </a>
        </aside>
      </section>
      <nav aria-label="Social media links"> {/* Added nav with ARIA label */}
        <Links />
      </nav>
    </main>
  );
};

export default Hero;