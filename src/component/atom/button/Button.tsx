import clsx from 'clsx'
import React, { useEffect, useState } from 'react'

import { IButtonProps } from '../../../types'
import { isUndefined } from '../../../utils'

const buttonTypeOptions = {
  default: '',
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  accent: 'btn-accent',
  info: 'btn-info',
  success: 'btn-success',
  warning: 'btn-warning',
  error: 'btn-error',
  ghost: 'btn-ghost',
  link: 'btn-link',
}

const sizeOptions = {
  xs: 'btn-xs',
  sm: 'btn-sm',
  md: 'btn-md',
  lg: 'btn-lg',
}

const shapeOptions = {
  square: 'btn-square',
  circle: 'btn-circle',
}

export const Button = ({
  className = '',
  size = 'md',
  shape,
  type = 'default',
  active = false,
  outline = false,
  dashed,
  wide = false,
  block = false,
  disabled = false,
  noAnimation,
  loading: loadingProp,
  progress,
  addTimeout,
  children,
  tabIndex,
  onClick,
  title,
}: IButtonProps) => {
  const [loading, setLoading] = useState<any>(false)

  useEffect(() => {
    if (!isUndefined(loadingProp)) {
      setLoading(loadingProp)
    }
  }, [loadingProp])

  const btnClasses = clsx(
    sizeOptions[size],
    buttonTypeOptions[type],
    {
      'btn-active': active,
      'btn-outline': outline,
      'btn-dashed': dashed,
      'btn-wide': wide,
      'btn-block': block,
      'no-animation': noAnimation,
      loading: loading,
    },
    `${shape && shapeOptions[shape]}`,
  )

  const next = () => {
    setLoading(false)
  }

  const handleOnClick = (e: React.MouseEvent<HTMLElement>) => {
    if (loading) return
    if (progress && !loading) {
      setLoading(true)

      if (addTimeout) {
        setTimeout(() => {
          setLoading(false)
        }, 400)
      }

      onClick(next, e)
    }
    if (!progress && !loading) {
      e.preventDefault()
      onClick(e)
    }
  }

  return (
    <button
      className={`btn ${btnClasses} ${className}`}
      disabled={disabled}
      tabIndex={tabIndex}
      onClick={handleOnClick}
    >
      {children && children}
      {title && title}
    </button>
  )
}
