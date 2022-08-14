import { ChangeHandler } from 'react-hook-form'
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

export interface IInputProps {
  name?: string
  // value?: any
  defaultValue?: any
  type?: 'text' | 'search' | 'email' | 'number' | 'textarea' | 'tel' | 'password'
  placeholder?: string
  // min?: number
  // max?: number
  // maxLength?: number
  showCounter?: boolean
  error?: any
  // errorMessage?: string
  className?: string
  inputClassName?: string
  fullWidth?: boolean
  isRequired?: boolean
  disabled?: boolean
  readOnly?: boolean
  autoFocus?: boolean
  bordered?: boolean
  tabIndex?: number
  rows?: number
  prefix?: React.ReactNode
  suffix?: React.ReactNode
  addonRight?: React.ReactNode
  // debounceParams?: DebouceParams
  onChange: ChangeHandler
  // onDebounceChange?(e: any): void
  onBlur: ChangeHandler
  onClick?(e: any): void
  onKeyUp?(e: any): void
  onKeyDown?(e: any): void
  size?: 'md' | 'sm' | 'lg'
  contentClassName?: string
  label?: string
  ref?: React.Ref<any>
}

type DebouceParams = {
  wait?: number
  immediate?: boolean
}

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
