import clsx from 'clsx'
import { forwardRef } from 'react'

import { SearchIcon } from '../../../constants/app-images'
import { IInputProps } from '../../../types/Atom'
import { Icon } from '../icon/Icon'

const inputSize = {
  md: 'input-md',
  sm: 'input-sm',
  lg: 'input-lg',
}

export const Input = forwardRef(
  (
    {
      placeholder,
      type = 'text',
      prefix,
      suffix,
      className = '',
      inputClassName = '',
      fullWidth,
      isRequired,
      disabled = false,
      bordered = true,
      readOnly = false,
      // min = -9999999999,
      // max = 9999999999,
      tabIndex,
      rows,
      error,
      autoFocus,
      // debounceParams,
      onClick,
      onKeyUp,
      onKeyDown,
      size = 'lg',
      contentClassName = '',
      label,
      name,
      onBlur,
      onChange,
    }: IInputProps,
    ref: React.Ref<any>,
  ) => {
    const basicInputClass = clsx(
      'w-full  input rounded-md focus:input-primary focus:outline-offset-0 px-3',
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
        {label && <label className={labelClasses}>{label}</label>}
        <div className="relative mb-2">
          {(prefix || type === 'search') && (
            <div className={contentClasses}>
              {prefix}
              {type === 'search' && <Icon isSvg source={SearchIcon} iconColor="text-gray-500" />}
            </div>
          )}
          {type !== 'textarea' ? (
            <input
              className={basicInputClass}
              name={name}
              type={type}
              placeholder={placeholder}
              onClick={onClick}
              onKeyUp={onKeyUp}
              onKeyDown={onKeyDown}
              disabled={disabled}
              readOnly={readOnly}
              autoFocus={autoFocus}
              tabIndex={tabIndex}
              // min={min}
              // max={max}
              ref={ref}
              // value={value}
              onBlur={onBlur}
              onChange={onChange}
            />
          ) : (
            <textarea
              className={textareaClasses}
              // name={name}
              rows={rows}
              placeholder={placeholder}
              required={isRequired}
              onClick={onClick}
              onKeyUp={onKeyUp}
              onKeyDown={onKeyDown}
              tabIndex={tabIndex}
              disabled={disabled}
              readOnly={readOnly}
              ref={ref}
              onBlur={onBlur}
              onChange={onChange}
            />
          )}
          {suffix && <div className={contentClasses}>{suffix}</div>}
        </div>
        {error && <p className="text-error text-sm font-normal">{error}</p>}
      </div>
    )
  },
)
