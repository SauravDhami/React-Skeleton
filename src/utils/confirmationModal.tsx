import { IButtonProps } from '../types'
import { GlobalModal } from './globalModal'
export interface ConfirmationModalProps {
  title?: string
  message?: string
  onCancel?: () => void
  onOkay?: () => void
  cancelLabel?: string
  okayLabel?: string
  isCloseable?: boolean
  className?: boolean
}

/**
 * Confirmation Modal
 * Used to handle the confirmation from user and perform action accordingly
 * @param title string // title of the modal
 * @param cancelLabel string
 * @param okayLabel string
 * @param message string
 * @param onCancel Function
 * @param onOkay Function
 * @param closable bool
 */

export const ConfirmationModal = ({
  title = 'Confirmation Modal Title',
  cancelLabel = 'Cancel',
  message = 'Confirmation Modal Message',
  okayLabel = 'Okay',
  onCancel = () => GlobalModal.close(),
  onOkay = () => {},
  isCloseable = true,
}: ConfirmationModalProps) => {
  const modalAction: IButtonProps[] = [
    {
      title: okayLabel,
      onClick: () => {
        onOkay()
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
        onCancel()
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
    actions: modalAction,
    title: title,
    isCloseable: isCloseable,
    hideCloseIcon: true,
    modalSize: 'sm',
    contentClassName: '',
    props: {
      message: message,
    },
  })
}

const ConfirmationModalBody = ({ message }: ConfirmationModalProps) => <div>{message}</div>
