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
