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
