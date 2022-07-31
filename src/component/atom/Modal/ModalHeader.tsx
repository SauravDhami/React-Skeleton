import React from 'react'

// type ModalHeaderProps = React.HTMLAttributes<HTMLDivElement>

const ModalHeader = React.forwardRef(({ children, className, ...props }: any, ref) => {
  const classes = ['w-full mb-8 text-xl', className].join('')
  return (
    <div {...props} className={classes} ref={ref}>
      {children}
    </div>
  )
})

ModalHeader.displayName = 'ModalHeader'

export default ModalHeader
