export type BadgeProps = {
  outline?: boolean
  size?: 'lg' | 'md' | 'sm' | 'xs'
  color?:
    | 'info'
    | 'success'
    | 'warning'
    | 'error'
    | 'primary'
    | 'secondary'
    | 'accent'
    | 'ghost'
    | 'default'
  responsive?: boolean
  className?: string
  children?: React.ReactNode
}

export interface ITooltipProps {
  message: string
  open?: boolean
  color?:
    | 'info'
    | 'success'
    | 'warning'
    | 'error'
    | 'primary'
    | 'secondary'
    | 'accent'
    | 'ghost'
    | 'default'
  position?: 'right' | 'bottom' | 'left' | 'top'
  className?: string
  children: React.ReactNode
}
