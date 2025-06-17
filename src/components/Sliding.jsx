import React, { useRef, useEffect, useState } from "react"

const SlidingContent = ({
  children,
  speed = 50,
  direction = "left",
  pauseOnHover = true,
  gap = 32,
  className = "",
  style = {},
}) => {
  const containerRef = useRef(null)
  const contentRef = useRef(null)
  const [contentWidth, setContentWidth] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (!contentRef.current) return

    // Measure content width
    const measureContent = () => {
      if (contentRef.current) {
        const width = contentRef.current.scrollWidth
        setContentWidth(width)
      }
    }

    measureContent()

    // Remeasure on window resize
    const handleResize = () => measureContent()
    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
  }, [children])

  const duration = contentWidth > 0 ? contentWidth / speed : 0

  const renderContent = () => {
    return React.Children.map(children, (child, index) => (
      <div key={index} className="flex-shrink-0" style={{ marginRight: `${gap}px` }}>
        {child}
      </div>
    ))
  }

  return (
    <div
      className={`relative w-full overflow-x-hidden ${className}`}
      style={style}
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
    >
      <div
        ref={containerRef}
        className="flex will-change-transform"
        style={{
          animation: duration > 0 ? `slide-${direction} ${duration}s linear infinite` : "none",
          animationPlayState: isPaused ? "paused" : "running",
        }}
      >
        {/* Original content */}
        <div ref={contentRef} className="flex">
          {renderContent()}
        </div>

        {/* Clone for seamless loop */}
        <div className="flex">{renderContent()}</div>
        <div className="flex">{renderContent()}</div>
      </div>

      <style jsx>{`
        @keyframes slide-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-${contentWidth + gap}px);
          }
        }

        @keyframes slide-right {
          0% {
            transform: translateX(-${contentWidth + gap}px);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  )
}

export default SlidingContent
