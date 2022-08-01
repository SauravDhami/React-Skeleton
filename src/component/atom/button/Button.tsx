import React, { useEffect, useState } from 'react'

import { isUndefined } from '../../../utils'

export interface IButtonProps {
  className?: string
  size?: 'xs' | 'sm' | 'md' | 'lg'
  type?: ButtonTypes
  shape?: 'square' | 'circle'
  active?: boolean
  outline?: boolean
  dashed?: boolean
  wide?: boolean
  block?: boolean
  disabled?: boolean
  noAnimation?: boolean
  loading?: boolean
  progress?: boolean
  addTimeout?: boolean
  tabIndex?: number
  children?: React.ReactNode
  onClick: (...props: any) => void
  title?: string
}

export type ButtonTypes =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'accent'
  | 'info'
  | 'success'
  | 'warning'
  | 'error'
  | 'ghost'
  | 'link'

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
  active,
  outline,
  dashed,
  wide,
  block,
  disabled,
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

  let btnClasses: string[] | string = []

  btnClasses.push(sizeOptions[size])

  if (type) btnClasses.push(buttonTypeOptions[type])
  if (active) btnClasses.push('btn-active')
  if (outline) btnClasses.push('btn-outline')
  if (dashed) btnClasses.push('btn-dashed')
  if (wide) btnClasses.push('btn-wide')
  if (block) btnClasses.push('btn-block')
  if (shape) btnClasses.push(shapeOptions[shape])
  if (noAnimation) btnClasses.push('no-animation')
  if (loading) btnClasses.push('loading')

  btnClasses = btnClasses.join(' ')

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
