import React, { useRef } from "react";
import Button from "./Button";
import HoverName from "./HoverName";
import gsap from "gsap";
import { useGSAP } from '@gsap/react';

// Register the plugin
gsap.registerPlugin(useGSAP);

const Links = () => {
    const divRef = useRef(null);

    useGSAP(() => {
        if (divRef.current) {
            // Initial animation
            gsap.from(divRef.current, {
                x: "100%",
                duration: 1,
                ease: "power3.out"
            });

            // Additional animations for each button
            gsap.from(divRef.current.querySelectorAll('a'), {
                opacity: 0,
                y: 50,
                duration: 1,
                stagger: 0.2,
                ease: "back.out(1.7)",
                delay: 0.5
            });

            // Animation for the separator lines
            gsap.from(divRef.current.querySelectorAll('span'), {
                scaleX: 0,
                duration: 1,
                stagger: 0.2,
                ease: "power3.out",
                delay: 0.5
            });
        }
    }, { scope: divRef });

    return (
        <div className="w-full md:w-1/2 ">
            <div className="flex justify-around items-center w-full" ref={divRef}>
                <HoverName name="LinkedIn">
                    <a
                        href="https://www.linkedin.com/in/umesh-tummepalli-924362333/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn profile"
                    >
                        <Button classes="px-4  text-2xl">
                            <i className="ri-linkedin-fill"></i>
                        </Button>
                    </a>
                </HoverName>
                <span className="h-0.5 w-1/6 md:w-1/4 bg-gray-500"></span>
                <HoverName name="GitHub">
                    <a
                        href="https://github.com/Umesh-Tummepalli"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub profile"
                    >
                        <Button classes="px-4 text-2xl">
                            <i className="ri-github-fill"></i>
                        </Button>
                    </a>
                </HoverName>
                <span className="h-0.5 w-1/6 md:w-1/4 bg-gray-500"></span>
                <HoverName name="Email">
                    <a href="mailto:umeshtummepallioff3@gmail.com" aria-label="Send email">
                        <Button classes="px-4 text-2xl">
                            <i className="ri-mail-fill"></i>
                        </Button>
                    </a>
                </HoverName>
            </div>
        </div>
    );
};

export default Links;
