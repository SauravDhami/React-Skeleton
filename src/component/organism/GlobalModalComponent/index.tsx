import React, { forwardRef } from 'react'

import { IButtonProps } from '../../atom'
import { Modal } from '../../molecules'

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
  width?: number
}

export const GlobalModalComponent = forwardRef(
  (
    {
      isOpen,
      component: MainComponent,
      props,
      isCloseable = false,
      onClose = () => {},
      closeModal = () => {},
      ...args
    }: GlobalModalComponentProps,
    ref: any,
  ) => {
    const onModalClose = () => {
      if (isCloseable) return
      closeModal()
      onClose()
    }

    return (
      <Modal open={isOpen || false} onModalClose={onModalClose} {...args} ref={ref}>
        {MainComponent && <MainComponent {...props} isInModal={true} />}
      </Modal>
    )
  },
)
