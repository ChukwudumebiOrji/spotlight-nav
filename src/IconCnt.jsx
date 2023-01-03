import React from "react"

const IconCnt = ({ children, color, isActive, activeColor }) => {
  return (
    <>
      {isActive ? (
        <div>
          <div className="line"></div>
          <div className="trapezoid" style={{ backgroundColor: color }}>
            <div className="icon" style={{ color: activeColor }}>
              {children}
            </div>
          </div>
        </div>
      ) : (
        <div className="icon" style={{ color }}>
          {children}
        </div>
      )}
    </>
  )
}

export default IconCnt
