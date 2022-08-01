import clsx from 'clsx'
import React from 'react'

import { Button, IButtonProps } from '../button/Button'

interface IModalActionsProps {
  actions: IButtonProps[]
  className?: string
}

export const ModalActions = ({ className = '', actions }: IModalActionsProps) => {
  const classes = clsx(['modal-action border-t p-0 m-0 px-3 py-2', className])
  return (
    <div className={classes}>
      {actions.map((el: IButtonProps, index: number) => (
        <Button {...el} size="md" key={index} />
      ))}
    </div>
  )
}
