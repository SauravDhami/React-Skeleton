import React from 'react'

interface LoaderProps {
  size?: number
  thikness?: number
  backColor?: string
}
/* Spinner for waiting */
const DotLoader = ({
  size = 16,
  thikness = 3,
  backColor = 'rgba(255, 255, 255, 0.2)',
}: LoaderProps) => {
  return (
    <div
      className="dot-loader"
      style={{
        width: `${size}px`,
        height: `${size}px`,
      }}
    ></div>
  )
}

export default DotLoader
