import React from 'react'

type ModalBodyProps = React.HTMLAttributes<HTMLDivElement>

const ModalBody = React.forwardRef(({ children, className, ...props }: any, ref) => {
  return (
    <div {...props} className={className} ref={ref}>
      {children}
    </div>
  )
})

ModalBody.displayName = 'ModalBody'

export default ModalBody
