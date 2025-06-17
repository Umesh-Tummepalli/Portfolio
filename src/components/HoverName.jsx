import React from 'react'

const HoverName = ({children,name}) => {
  return (
    <div className="group relative">
        <span className="absolute p-2 px-5 font-bold rounded-full bg-white z-10 text-black text-sm group-hover:-translate-x-full duration-200 ease-out scale-0 group-hover:scale-100 whitespace-nowrap">{name}</span>
        {children}
    </div>
  )
}

export default HoverName