import { IButtonProps } from './Button'

export type IModalProps = {
  open?: boolean
  responsive?: boolean
  children?: any
  className?: string
  onClose?: () => void
  modalSize?: 'xs' | 'sm' | 'md' | 'lg'
  isCloseable?: boolean
  closeButtonClassName?: string
  title?: string
  hideHeader?: boolean
  headerComponent?: React.FC<any>
  headerClassName?: string
  actions?: IButtonProps[]
  actionClassName?: string
  contentClassName?: string
  onModalClose?: () => void
  hideCloseIcon?: boolean
  width?: string
  isSlidePane?: boolean
  position?: 'right' | 'left'
}

export interface IModalActionsProps {
  actions: IButtonProps[]
  className?: string
}

export interface IModalHeader {
  children: React.ReactNode
  className?: string
  onClickBackdrop?: () => void
  isCloseable?: boolean
  hideCloseIcon?: boolean
}

export type GlobalModalComponentProps = {
  component?: React.FC<any>
  props?: { [key: string]: unknown }
  onClose?: () => void
  closeModal?: () => void
  isOpen?: boolean
  responsive?: boolean
  children?: any
  className?: string
  modalSize?: 'xs' | 'sm' | 'md' | 'lg'
  isCloseable?: boolean
  closeButtonClassName?: string
  title?: string
  hideHeader?: boolean
  headerComponent?: React.FC<any>
  headerClassName?: string
  actions?: IButtonProps[]
  actionClassName?: string
  contentClassName?: string
  hideCloseIcon?: boolean
  height?: number
  width?: string
  isSlidePane?: boolean
  position?: 'right' | 'left'
}

export interface IGlobalModalOpenProps extends GlobalModalComponentProps {
  component?: React.FC<any> // React FC as component
  ref?: any // @todo specify ref object
  id?: number
}
