import clsx from 'clsx'
import React, { forwardRef, useEffect, useState } from 'react'

import { SearchIcon } from '../../../constants/app-images'
import { IInputProps } from '../../../types/Atom'
import { isUndefined } from '../../../utils'
import { Icon } from '../icon/Icon'

const inputSize = {
  md: 'input-md',
  sm: 'input-sm',
  lg: 'input-lg',
}

export const Input = forwardRef<HTMLDivElement, IInputProps>(
  (
    {
      name,
      value: propValue = undefined,
      defaultValue,
      placeholder,
      type = 'search',
      prefix,
      suffix,
      className = '',
      inputClassName = '',
      fullWidth,
      isRequired,
      disabled = false,
      bordered = true,
      readOnly = false,
      min = -9999999999,
      max = 9999999999,
      tabIndex,
      rows,
      error,
      errorMessage,
      autoFocus,
      debounceParams,
      onChange,
      onDebounceChange,
      onBlur,
      onClick,
      onKeyUp,
      onKeyDown,
      size = 'lg',
      contentClassName = '',
    }: IInputProps,
    ref: any,
  ) => {
    const [value, setValue] = useState<any>(!isUndefined(defaultValue) ? defaultValue : '')

    useEffect(() => {
      if (propValue !== undefined) {
        setValue(propValue)
      }
    }, [propValue])

    const handleChange = (e: any) => {
      let val = e.target.value
      if (
        propValue === undefined ||
        typeof onBlur === 'function' ||
        typeof onDebounceChange === 'function' ||
        typeof onChange === 'function'
      ) {
        setValue(val)
      }

      if (type === 'number') {
        const actualVal = val
        val = +val || 0
        if (typeof max !== 'undefined' && val > max) {
          return setValue(value)
        }
        if (actualVal.length && typeof min !== 'undefined' && val < min) {
          return setValue(value || min)
        }
      }

      if (typeof onChange === 'function' && e.type === 'change') {
        if (typeof min !== 'undefined' && val < min) {
          return
        }
        onChange(val)
      }

      // if (typeof onDebounceChange === 'function' && e.type === 'change') {
      //     Debounce(
      //         onDebounceChange,
      //         debounceParams?.wait || 1000,
      //         debounceParams?.immediate || false
      //     )(val);
      // }

      if (typeof onBlur === 'function' && e.type === 'blur') {
        onBlur(val)
      }
    }

    const basicInputClass = clsx(
      'w-full  input rounded-md focus:input-primary focus:outline-offset-0',
      inputSize[size],
      {
        'input-bordered': bordered,
        'input-error': error,
        'w-full': fullWidth,
        'pl-10': prefix || type === 'search',
        'pr-10': suffix,
      },
      inputClassName,
    )

    const textareaClasses = clsx(
      'w-full textarea rounded-sm focus:input-primary focus:outline-offset-0 text-lg',
      {
        'textarea-bordered': bordered,
        'textarea-error': error,
        'w-full': fullWidth,
        'pl-10': prefix,
        'pr-10': suffix,
      },
      inputClassName,
    )

    const contentClasses = clsx(
      'flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none',
      {
        'left-0 pl-3 ': prefix,
        'right-0  pr-3': suffix,
      },
      contentClassName,
    )

    const labelClasses = clsx('block text-lg label-text mb-2 group-focus-within:text-primary', {
      'text-error': error,
    })

    const mainClass = clsx('group', className)

    return (
      <div className={mainClass}>
        <label className={labelClasses}>Your Email</label>
        <div className="relative mb-2">
          {(prefix || type === 'search') && (
            <div className={contentClasses}>
              {prefix}
              <Icon isSvg source={SearchIcon} iconColor="text-gray-500" />
            </div>
          )}
          {type !== 'textarea' ? (
            <input
              className={basicInputClass}
              name={name}
              type={type}
              value={value}
              placeholder={placeholder}
              onChange={handleChange}
              onBlur={handleChange}
              onClick={onClick}
              onKeyUp={onKeyUp}
              onKeyDown={onKeyDown}
              disabled={disabled}
              readOnly={readOnly}
              autoFocus={autoFocus}
              tabIndex={tabIndex}
              min={min}
              max={max}
              ref={ref}
            />
          ) : (
            <textarea
              className={textareaClasses}
              name={name}
              value={value}
              rows={rows}
              placeholder={placeholder}
              required={isRequired}
              onChange={handleChange}
              onBlur={handleChange}
              onClick={onClick}
              onKeyUp={onKeyUp}
              onKeyDown={onKeyDown}
              tabIndex={tabIndex}
              disabled={disabled}
              readOnly={readOnly}
              ref={ref}
            />
          )}
          {suffix && <div className={contentClasses}>{suffix}</div>}
        </div>
        {error && <p className="text-error text-sm font-normal">{errorMessage}</p>}
      </div>
    )
  },
)
