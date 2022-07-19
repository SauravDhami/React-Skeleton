import React from 'react'
import { isString } from '../../../utils/common/common'

type OUTLINE_IDENTIFIER = 'circular' | 'rectangle'

export interface IconProps {
  source: string | (() => any)
  onClick?: (_?: any) => void | unknown
  style?: object
  outlined?: OUTLINE_IDENTIFIER
  size?: number
  height?: number
  iconClass?: string
  className?: string
  iconColor?: string
  isSvg?: boolean
}

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
  const CircularStyle = `icon-container  rounded-full`
  const RectangleStyle = `icon-container rounded`

  /** Getting style depends on outline  */
  const getContainetStyle = (type?: string) => {
    const styles: any = {
      circular: `${CircularStyle} ${className}`,
      rectangle: `${RectangleStyle} ${className}`,
      default: `icon-container ${className}`,
    }

    return styles[type || 'default']
  }

  return (
    <div onClick={onClick} className={`${getContainetStyle(outlined)}`} style={style}>
      <IconDisplay
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

const IconDisplay = ({ source, height, size, iconClass, iconColor, isSvg }: any) => {
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
