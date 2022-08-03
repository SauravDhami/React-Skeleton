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
  value?: any
  defaultValue?: any
  type?: 'text' | 'search' | 'email' | 'number' | 'textarea' | 'tel'
  placeholder?: string
  min?: number
  max?: number
  maxLength?: number
  showCounter?: boolean
  error?: boolean
  errorMessage?: string
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
  debounceParams?: DebouceParams
  onChange?(value: any): void
  onDebounceChange?(value: any): void
  onBlur?(value: any): void
  onClick?(e: any): void
  onKeyUp?(e: any): void
  onKeyDown?(e: any): void
  size?: 'md' | 'sm' | 'lg'
  contentClassName?: string
}

type DebouceParams = {
  wait?: number
  immediate?: boolean
}
