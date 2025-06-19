import React from 'react'

const HoverName = ({ 
  children, 
  name, 
  delay = 100, 
  tooltipClassName = '-translate-x-1/2', 
  arrowClasses="left-1/2 -translate-x-1/2",
  ...props 
}) => {

  return (
    <div 
      className="group relative inline-flex items-center justify-center" 
      aria-label={name}
      {...props}
    >
      {/* Tooltip */}
      <span 
        className={`
          absolute z-20 p-2 px-4 rounded-lg bg-white text-black text-sm
          whitespace-nowrap pointer-events-none shadow-lg
          opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100
          transition-all duration-200 ease-[cubic-bezier(0.33,1,0.68,1)] font-medium
          bottom-full left-1/2 mb-2 
          ${tooltipClassName}
        `}
        style={{ transitionDelay: `${delay}ms`, fontFamily:"'Poppins'" }}
      >
        {name}
        {/* Tooltip arrow */}
        <span 
          className={`absolute w-3 h-3 bg-white rotate-45 bottom-0  translate-y-1/4 -z-10
          ${arrowClasses}
            `}
        />
      </span>
      
      {/* Child element */}
      {children}
    </div>
  )
}

export default HoverName;