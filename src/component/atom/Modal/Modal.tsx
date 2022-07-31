import React, { forwardRef, ReactNode } from 'react'
import { Button } from '../button/Button'
// import clsx from 'clsx'
// import { twMerge } from 'tailwind-merge'

// import { IComponentBaseProps } from '../types'

import ModalActions from './ModalActions'
import ModalBody from './ModalBody'
import ModalHeader from './ModalHeader'

export type ModalProps = React.HTMLAttributes<HTMLDivElement> & {
  open?: boolean
  responsive?: boolean
  onClickBackdrop?: () => void
  children: React.ReactNode
  className: string
  onClose: () => void
}

const Modal = forwardRef<HTMLDivElement, ModalProps>(
  (
    { children, open, responsive, onClickBackdrop, className = '', ...props }: any,
    ref,
  ): JSX.Element => {
    const containerClasses = ['modal']
    if (open) containerClasses.push(' modal-open')

    if (responsive) containerClasses.push('modal-bottom sm:modal-middle')
    const containerClassName: string = containerClasses.join('')
    const bodyClasses = ['modal-box', className].join('')

    return (
      <div
        aria-label="Modal"
        aria-hidden={!open}
        aria-modal={open}
        className={containerClassName}
        onClick={(e) => {
          e.stopPropagation()
          if (e.target === e.currentTarget) {
            e.stopPropagation()
            if (onClickBackdrop) {
              console.log('back drop')
              onClickBackdrop()
            }
          }
        }}
        tabIndex={-1}
      >
        <div {...props} className={bodyClasses} ref={ref}>
          {children}
          <Button
            size="sm"
            shape="circle"
            className="absolute right-2 top-2"
            onClick={() => {
              onClickBackdrop()
            }}
          >
            ✕
          </Button>
        </div>
      </div>
    )
  },
)

Modal.displayName = 'Modal'

export default Object.assign(Modal, {
  Header: ModalHeader,
  Body: ModalBody,
  Actions: ModalActions,
})
