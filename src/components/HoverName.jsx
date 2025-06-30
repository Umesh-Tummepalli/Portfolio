import React from 'react';

const HoverName = ({ 
  children, 
  name, 
  delay = 100, 
  tooltipClassName = '-translate-x-1/2', 
  arrowClasses = "left-1/2 -translate-x-1/2",
  ...props 
}) => {
  return (
    <div 
      className="group relative inline-flex items-center justify-center"
      role="tooltip"
      aria-labelledby={`tooltip-${name.replace(/\s+/g, '-').toLowerCase()}`}
      {...props}
    >
      {/* Tooltip with proper ARIA attributes */}
      <span 
        id={`tooltip-${name.replace(/\s+/g, '-').toLowerCase()}`}
        className={`
          absolute z-20 p-2 px-4 rounded-lg bg-white text-black text-sm
          whitespace-nowrap pointer-events-none shadow-lg
          opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100
          transition-all duration-200 ease-[cubic-bezier(0.33,1,0.68,1)] font-medium
          bottom-full left-1/2 mb-2 
          ${tooltipClassName}
        `}
        style={{ transitionDelay: `${delay}ms`, fontFamily: "'Poppins'" }}
        role="tooltip"
        aria-hidden="true"
      >
        {name}
        {/* Tooltip arrow with aria-hidden */}
        <span 
          className={`absolute w-3 h-3 bg-white rotate-45 bottom-0 translate-y-1/4 -z-10
          ${arrowClasses}`}
          aria-hidden="true"
        />
      </span>
      
      {/* Child element with proper focus management */}
      {React.cloneElement(children, {
        'aria-describedby': `tooltip-${name.replace(/\s+/g, '-').toLowerCase()}`,
        tabIndex: 0
      })}
    </div>
  );
};

export default HoverName;