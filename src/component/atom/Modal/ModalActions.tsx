import React from 'react'

const ModalActions = React.forwardRef(({ children, className, ...props }: any, ref) => {
  const classes = ['modal-action', className].join('')
  return (
    <div {...props} className={classes} ref={ref}>
      {children}
    </div>
  )
})

ModalActions.displayName = 'ModalActions'

export default ModalActions
