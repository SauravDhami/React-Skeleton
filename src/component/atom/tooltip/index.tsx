import clsx from 'clsx'
import React from 'react'

import { ITooltipProps } from '../../../types'

const tooltipPosition = {
  top: '',
  left: 'tooltip-left',
  bottom: 'tooltip-bottom',
  right: 'tooltip-right',
}
const tooltipColorOptions = {
  default: '',
  primary: 'tooltip-primary',
  secondary: 'tooltip-secondary',
  accent: 'tooltip-accent',
  info: 'tooltip-info',
  success: 'tooltip-success',
  warning: 'tooltip-warning',
  error: 'tooltip-error',
  ghost: 'tooltip-ghost',
}

export const Tooltip = ({
  message,
  children,
  open = false,
  color = 'default',
  position = 'top',
  className = '',
  ...props
}: ITooltipProps): JSX.Element => {
  const classes = clsx([
    'tooltip',
    {
      'tooltip-open': open,
    },
    tooltipPosition[position],
    tooltipColorOptions[color],
    className,
  ])

  return (
    <div role="tooltip" {...props} data-tip={message} className={classes} {...props}>
      {children}
    </div>
  )
}
