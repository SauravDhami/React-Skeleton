import clsx from 'clsx'
import React, { forwardRef } from 'react'

import { IModalProps } from '../../../types'
import { Button, ModalActions, ModalHeader } from '../../atom'

export const Modal = forwardRef<HTMLDivElement, IModalProps>(
  (
    {
      children,
      open,
      responsive,
      className = '',
      modalSize = 'md',
      isCloseable = false,
      title = 'Modal Header',
      hideHeader = false,
      headerComponent: HeaderComponent,
      headerClassName = '',
      actions = [
        {
          title: 'hello',
          onClick: () => {},
        },
      ],
      actionClassName = '',
      contentClassName = '',
      onModalClose = () => {},
      hideCloseIcon = false,
      height,
      width,
    }: IModalProps,
    ref,
  ): JSX.Element => {
    const containerClasses = clsx([
      'modal',
      clsx({
        'modal-open': open,
        'modal-bottom sm:modal-middle': responsive,
      }),
    ])

    const bodyClasses = clsx([
      'modal-box rounded-md p-0 ',
      className,
      {
        'max-w-[350px]': modalSize === 'xs',
        'max-w-[500px]': modalSize === 'sm',
        'max-w-[750px]': modalSize === 'md',
        'max-w-[90%]': modalSize === 'lg',
      },
      `${width && `w-[${width}px]`}`,
      `${height && `w-[${height}px]`}`,
    ])

    const contentClasses = clsx(['p-0 m-0 p-3', contentClassName])

    return (
      <div
        aria-label="Modal"
        aria-hidden={!open}
        aria-modal={open}
        className={containerClasses}
        onClick={(e) => {
          e.stopPropagation()
          if (e.target === e.currentTarget) {
            e.stopPropagation()
            onModalClose()
          }
        }}
      >
        <div className={bodyClasses} ref={ref}>
          <div className="relative">
            {!hideHeader ? (
              <ModalHeader
                className={headerClassName}
                onClickBackdrop={onModalClose}
                isCloseable={isCloseable}
                hideCloseIcon={hideCloseIcon}
              >
                <>
                  {title && title}
                  {HeaderComponent && HeaderComponent}
                </>
              </ModalHeader>
            ) : (
              !hideCloseIcon && (
                <div className="absolute right-2 top-1/2  -translate-y-1/2 font-light ">
                  <Button
                    size="sm"
                    shape="circle"
                    className="text-black text-lg "
                    type="ghost"
                    onClick={() => {
                      if (!isCloseable) {
                        onModalClose()
                      }
                    }}
                  >
                    ✕
                  </Button>
                </div>
              )
            )}
          </div>
          <div className={contentClasses}>{children}</div>
          {actions?.length > 0 && <ModalActions actions={actions} className={actionClassName} />}
        </div>
      </div>
    )
  },
)
