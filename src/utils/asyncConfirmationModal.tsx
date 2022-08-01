import { IButtonProps } from '../types'
import { GlobalModal } from './globalModal'
export interface AsyncConfirmationModalProps {
  title?: string
  message?: string
  cancelLabel?: string
  okayLabel?: string
  isClosable?: boolean
}

/**
 * Async Confirmation Modal
 * Can be used to take a response from the user and perform action based on user decision
 * @param title string
 * @param cancelLabel string
 * @param okayLabel string
 * @param closable bool
 * @param message string
 * @returns Promise
 */

export const AsyncConfirmationModal = ({
  cancelLabel = 'Cancel',
  okayLabel = 'Confirm',
  message = 'AsynConfirmation Modal message',
  title = 'AsyncConfirmation Modal Title',
  isClosable = false,
}: AsyncConfirmationModalProps) => {
  return new Promise<boolean>((resolve) => {
    const actions: IButtonProps[] = [
      {
        title: okayLabel,
        onClick: () => {
          resolve(true)
          GlobalModal.close()
        },
        type: 'primary',
        noAnimation: true,
        outline: true,
        className: 'w-[120px]',
      },
      {
        title: cancelLabel,
        onClick: () => {
          resolve(false)
          GlobalModal.close()
        },
        noAnimation: true,
        type: 'error',
        outline: true,
        className: 'w-[120px]',
      },
    ]

    GlobalModal.open({
      component: ConfirmationModalBody,
      actions: actions,
      title: title,
      isCloseable: isClosable,
      hideCloseIcon: true,
      modalSize: 'sm',
      headerClassName: 'text-md',
      props: {
        message: message,
      },
    })
  })
}

const ConfirmationModalBody = ({ message }: AsyncConfirmationModalProps) => {
  return <p>{message}</p>
}
