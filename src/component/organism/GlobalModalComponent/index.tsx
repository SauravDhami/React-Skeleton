import React, { forwardRef } from 'react'

import { GlobalModalComponentProps } from '../../../types'
import { Modal } from '../../molecules'

export const GlobalModalComponent = forwardRef(
  (
    {
      isOpen,
      component: MainComponent,
      props,
      isCloseable = false,
      onClose = () => {},
      closeModal = () => {},
      width,
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
      <Modal open={isOpen || false} width={width} onModalClose={onModalClose} {...args} ref={ref}>
        {MainComponent && <MainComponent {...props} isInModal={true} />}
      </Modal>
    )
  },
)
