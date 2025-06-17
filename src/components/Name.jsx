import React, { useRef,useEffect} from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Name = ({text}) => {
  const nameRef = useRef([]);
  // Register animations with proper cleanup
  const { contextSafe } = useGSAP({ scope: nameRef });
  
  // Smooth animation function
  const handleMouseEnter = contextSafe((index) => {
    const letter = nameRef.current[index];
    if (!letter) return;
    
    // Kill any existing animations on this letter
   if (gsap.isTweening(letter)) {
  return; // animation is already in progress, so exit
}
    squeezAnim(letter);
    // Create a timeline for smooth sequenced animation
  });
  function squeezAnim(letter){
    gsap.timeline()
      .to(letter, {
        scaleY: 0.6,
        y: 10,
        duration: 0.4,
        ease: "power2.out"
      })
      .to(letter, {
        transformOrigin: "center bottom",
        y: -10,
        scaleY: 1.4,
        duration: 0.3,
        ease: "back.out(1.7)"
      })
      .to(letter, {
        scaleY: 1,
        y: 0,
        duration: 0.5,
        ease: "elastic.out(2, 0.5)"
      });
  }
  useGSAP(()=>{
    setTimeout(()=>{
      gsap.timeline()
      .to(nameRef.current,{
        filter:"blur(0px)",
        stagger:0.1,
        duration:2.5,
        opacity:1,
        scale:1,
      })
      .to(nameRef.current, {
        scaleY: 0.6,
        y: 10,
        duration: 0.4,
        ease: "power2.out"
      })
      .to(nameRef.current, {
        transformOrigin: "center bottom",
        y: -10,
        scaleY: 1.4,
        duration: 0.3,
        ease: "back.out(1.7)"
      })
      .to(nameRef.current, {
        scaleY: 1,
        y: 0,
        duration: 0.5,
        ease: "elastic.out(2, 0.5)"
      });
    },1550)
  },[])
  return (
      <div className="tracking-tighter whitespace-nowrap letter-container border-l-4 pl-3 ">
        {text.split("").map((item, index) => (
          <pre 
            key={index}
            className="inline-block hover:cursor-pointer will-change-transform px-1  shadow-black blur-[10px] opacity-0 "
            ref={(el) => (nameRef.current[index] = el)}
            onMouseEnter={() => handleMouseEnter(index)}
          >
            {item}
          </pre>
        ))}
      </div>
  );
}

export default Name;