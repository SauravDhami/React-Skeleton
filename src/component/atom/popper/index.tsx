import { Placement } from '@popperjs/core'
import clsx from 'clsx'
import React, { useEffect, useState } from 'react'
import { usePopper } from 'react-popper'

export interface IPopperProps {
  className?: string
  trigger?: 'click' | 'hover' | 'focus'
  placement?: Placement
  children: React.ReactNode
  element: React.ReactElement
  arrow?: boolean
  disabled?: boolean
  visible?: boolean
  destroyOnHide?: boolean
  autoWidth?: boolean
  offsetY?: number
}

const Popper = ({
  className = '',
  trigger = 'click',
  placement = 'bottom',
  arrow = true,
  disabled,
  element,
  children,
  destroyOnHide,
  autoWidth,
  offsetY,
}: IPopperProps) => {
  const [referenceElement, setReferenceElement] = useState<any>(null)
  const [popperElement, setPopperElement] = useState<any>(null)
  const [arrowElement, setArrowElement] = useState<any>(null)
  const [hidden, setHidden] = useState(true)

  const { styles, attributes, update } = usePopper(referenceElement, popperElement, {
    placement,
    strategy: 'fixed',
    modifiers: [
      { name: 'arrow', options: { element: arrowElement } },
      {
        name: 'offset',
        enabled: true,
        options: {
          offset: arrow ? [0, offsetY || 10] : [0, offsetY || 0],
        },
      },
      {
        name: 'preventOverflow',
        options: {
          padding: 8,
        },
      },
    ],
  })

  useEffect(() => {
    if (referenceElement && !disabled) {
      if (trigger === 'click') {
        referenceElement.addEventListener('click', handleTrigger)
      } else if (trigger === 'focus') {
        referenceElement.querySelector('input').addEventListener('focus', handleTrigger)
        referenceElement.querySelector('input').addEventListener('blur', handleTrigger)
      } else if (trigger === 'hover') {
        referenceElement.addEventListener('mouseenter', handleTrigger)
        referenceElement.addEventListener('mouseleave', handleTrigger)
      }
      document.addEventListener('click', hidePopper)
      document.addEventListener('closePoppovers', hidePopper)

      if (autoWidth && !disabled) {
        handlePopperWidth()
        window.addEventListener('resize', handlePopperWidth)
      }
    }

    if (disabled) {
      if (popperElement) {
        setHidden(true)
      }
      setTimeout(clearAllEvents, 100)
    }

    return () => {
      clearAllEvents()
    }
  }, [referenceElement, popperElement, update, trigger, disabled, autoWidth])

  const clearAllEvents = () => {
    if (referenceElement) {
      if (trigger === 'click') {
        referenceElement.removeEventListener('click', handleTrigger)
      } else if (trigger === 'focus') {
        referenceElement.querySelector('input').removeEventListener('focus', handleTrigger)
        referenceElement.querySelector('input').removeEventListener('blur', handleTrigger)
      } else if (trigger === 'hover') {
        referenceElement.removeEventListener('mouseenter', handleTrigger)
        referenceElement.removeEventListener('mouseleave', handleTrigger)
      }
      document.removeEventListener('click', hidePopper)
      document.removeEventListener('closePoppovers', hidePopper)
      window.removeEventListener('resize', handlePopperWidth)
    }
  }

  useEffect(() => {
    popperUpdate()
  }, [children, element])

  const popperUpdate = async () => {
    update && (await update())
  }

  const handlePopperWidth = () => {
    if (popperElement && referenceElement) {
      ;(popperElement as HTMLElement).style.width =
        (referenceElement as HTMLElement).getBoundingClientRect().width + 'px'
    }
  }

  const handleTrigger = async (e: any) => {
    e.preventDefault()
    e.stopPropagation()

    if (trigger === 'click') {
      if (popperElement || destroyOnHide) {
        setHidden((prev) => !prev)
        popperUpdate()
      }
      document.dispatchEvent(new CustomEvent('closePoppovers', { detail: popperElement }))
    } else if (trigger === 'focus') {
      if (popperElement) {
        if (hidden && e.type === 'focus') {
          setHidden(false)
        } else if (e.type === 'blur') {
          hidePopper(e)
        }
        popperUpdate()
      }

      document.dispatchEvent(new CustomEvent('closePoppovers', { detail: popperElement }))
    } else if (trigger === 'hover') {
      if (popperElement) {
        if (hidden && e.type === 'mouseenter') {
          setHidden(false)
        } else if (e.type === 'mouseleave') {
          setHidden(true)
        }
        popperUpdate()
      }

      document.dispatchEvent(new CustomEvent('closePoppovers', { detail: popperElement }))
    }
  }

  const hidePopper = (e: any) => {
    if (popperElement && e.target && popperElement.contains(e.target)) return
    if (referenceElement && e.target && referenceElement.contains(e.target)) return
    if (popperElement && e.relatedTarget && popperElement.contains(e.relatedTarget)) return
    if (popperElement && e.detail !== popperElement) {
      setHidden(true)
    }
  }

  const classes = clsx('popper-box', className, {
    hidden: hidden,
  })

  return (
    <>
      <span ref={setReferenceElement}>{children}</span>

      {!(destroyOnHide && hidden) && (
        <div
          className={classes}
          ref={setPopperElement}
          style={styles.popper}
          {...attributes.popper}
        >
          <div className="popper-container">{!disabled && element}</div>
          {arrow && (
            <div
              className="popper-arrow"
              ref={setArrowElement}
              style={styles.arrow}
              {...attributes.arrow}
            />
          )}
        </div>
      )}
    </>
  )
}

export const ClosePoppers = () => {
  document.dispatchEvent(new CustomEvent('closePoppovers', { detail: null }))
}

export default Popper
