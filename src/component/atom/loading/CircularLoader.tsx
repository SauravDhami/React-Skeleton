import React from 'react'

interface LoaderProps {
  size?: number
  thikness?: number
  backColor?: string
}
/* Spinner for waiting */
const CircularLoader = ({
  size = 16,
  thikness = 3,
  backColor = 'rgba(255, 255, 255, 0.2)',
}: LoaderProps) => {
  return (
    <div
      className="loader"
      style={{
        border: `${thikness}px solid ${backColor}`,
        borderLeft: `${thikness}px solid`,
        width: `${size}px`,
        height: `${size}px`,
      }}
    ></div>
  )
}

export default CircularLoader
