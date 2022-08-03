import clsx from 'clsx'
import React from 'react'

import { BadgeProps } from '../../../types'

const badgeColorOptions = {
  default: '',
  primary: 'badge-primary',
  secondary: 'badge-secondary',
  accent: 'badge-accent',
  info: 'badge-info',
  success: 'badge-success',
  warning: 'badge-warning',
  error: 'badge-error',
  ghost: 'badge-ghost',
}
const badgeSizeOptions = {
  xs: 'badge-xs',
  sm: 'badge-sm',
  md: 'badge-md',
  lg: 'badge-lg',
}

export const Badge = ({
  children,
  outline = false,
  size = 'md',
  color = 'default',
  responsive,
  className = '',
  ...props
}: BadgeProps): JSX.Element => {
  const classes = clsx([
    `badge`,
    badgeColorOptions[color],
    badgeSizeOptions[size],
    {
      'badge-xs md:badge-sm lg:badge-md xl:badge-lg': responsive,
      'badge-outline': outline,
    },
    className,
  ])

  return (
    <div aria-label="Badge" className={classes} {...props}>
      {children}
    </div>
  )
}
