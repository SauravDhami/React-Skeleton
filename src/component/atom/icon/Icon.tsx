import clsx from 'clsx'
import React from 'react'

import { IconProps } from '../../../types'
import { isString } from '../../../utils/common/common'

export const Icon = ({
  source,
  className = '',
  style,
  iconClass = '',
  iconColor = 'text-current',
  onClick,
  outlined,
  size = 20,
  height,
  isSvg = false,
}: IconProps) => {
  const containerClassName = clsx(
    [
      'icon-container',
      {
        'icon-container  rounded-full': outlined === 'circular',
        'icon-container rounded': outlined === 'rectangle',
      },
    ],
    className,
  )

  return (
    <div onClick={onClick} className={containerClassName} style={style}>
      <IconComponent
        source={source}
        iconColor={iconColor}
        iconClass={iconClass}
        size={size}
        isSvg={isSvg}
        height={height}
      />
    </div>
  )
}

const IconComponent = ({ source, height, size, iconClass, iconColor, isSvg }: any) => {
  const iconStyle = { height: height ? height : size, width: size }
  if (isSvg) {
    const SVGComp = source
    return (
      <div style={iconStyle} className={`${iconClass} ${iconColor}`}>
        <SVGComp />
      </div>
    )
  }

  if (isString(source)) {
    return (
      <i style={{ fontSize: size }} className={`material-icons ${iconClass} ${iconColor}`}>
        {source}
      </i>
    )
  }

  return <img style={iconStyle} className={`${iconClass} ${iconColor}`} src={source() as any} />
}
