// import React, { forwardRef, useEffect, useState } from 'react';

// export interface InputProps {
//     name?: string;
//     value?: any;
//     defaultValue?: any;
//     type?: 'text' | 'search' | 'email' | 'number' | 'textarea' | 'tel';
//     placeholder?: string;
//     min?: number;
//     max?: number;
//     maxLength?: number;
//     showCounter?: boolean;
//     error?: boolean;
//     errorMessage?: string;
//     className?: string;
//     inputClassName?: string;
//     fullWidth?: boolean;
//     isRequired?: boolean;
//     disabled?: boolean;
//     readOnly?: boolean;
//     autoFocus?: boolean;
//     bordered?: boolean;
//     tabIndex?: number;
//     rows?: number;
//     prefix?: React.ReactNode;
//     suffix?: React.ReactNode;
//     addonRight?: React.ReactNode;
//     debounceParams?: DebouceParams;
//     onChange?(value: any): void;
//     onDebounceChange?(value: any): void;
//     onBlur?(value: any): void;
//     onClick?(e: any): void;
//     onKeyUp?(e: any): void;
//     onKeyDown?(e: any): void;
// }

// type DebouceParams = {
//     wait?: number;
//     immediate?: boolean;
// };

// const Input = forwardRef(
//     (
//         {
//             name,
//             value: propValue = undefined,
//             defaultValue,
//             placeholder,
//             type = 'text',
//             prefix,
//             suffix,
//             addonRight,
//             className = '',
//             inputClassName = '',
//             fullWidth,
//             isRequired,
//             disabled = false,
//             bordered = false,
//             readOnly = false,
//             min = -9999999999,
//             max = 9999999999,
//             maxLength,
//             showCounter,
//             tabIndex,
//             rows,
//             error,
//             errorMessage,
//             autoFocus,
//             debounceParams,
//             onChange,
//             onDebounceChange,
//             onBlur,
//             onClick,
//             onKeyUp,
//             onKeyDown,
//         }: InputProps,
//         ref: any
//     ) => {
//         const [value, setValue] = useState<any>(!IsUndefined(defaultValue) ? defaultValue : '');

//         useEffect(() => {
//             if (propValue !== undefined) {
//                 setValue(propValue);
//             }
//         }, [propValue]);

//         const handleChange = (e: any) => {
//             let val = e.target.value;
//             try {
//                 if (
//                     propValue === undefined ||
//                     typeof onBlur === 'function' ||
//                     typeof onDebounceChange === 'function' ||
//                     typeof onChange === 'function'
//                 ) {
//                     setValue(val);
//                 }

//                 if (type === 'number') {
//                     const actualVal = val;
//                     val = +val || 0;
//                     if (typeof max !== 'undefined' && val > max) {
//                         return setValue(value);
//                     }
//                     if (actualVal.length && typeof min !== 'undefined' && val < min) {
//                         return setValue(value || min);
//                     }
//                 }

//                 if (typeof onChange === 'function' && e.type === 'change') {
//                     if (typeof min !== 'undefined' && val < min) {
//                         return;
//                     }
//                     onChange(val);
//                 }

//                 if (typeof onDebounceChange === 'function' && e.type === 'change') {
//                     Debounce(
//                         onDebounceChange,
//                         debounceParams?.wait || 1000,
//                         debounceParams?.immediate || false
//                     )(val);
//                 }

//                 if (typeof onBlur === 'function' && e.type === 'blur') {
//                     onBlur(val);
//                 }
//             } catch (e) {
//                 console.warn(e);
//             }
//         };

//         return (
//             <div>
//                 <label className={`${prefix ? 'input-group-plain' : ''} ${className}`}>
//                     {prefix && (
//                         <span className={`${disabled ? '!text-base-secondary' : ''}`}>
//                             {prefix}
//                         </span>
//                     )}

//                     {(type === 'text' ||
//                         type === 'number' ||
//                         type === 'search' ||
//                         type === 'email') && (
//                         <input
//                             className={classNames('input max-w-full', inputClassName, {
//                                 'input-bordered': bordered,
//                                 'input-error': error,
//                                 'w-full': fullWidth,
//                             })}
//                             name={name}
//                             type={type}
//                             value={value}
//                             placeholder={placeholder}
//                             onChange={handleChange}
//                             onBlur={handleChange}
//                             onClick={onClick}
//                             onKeyUp={onKeyUp}
//                             onKeyDown={onKeyDown}
//                             disabled={disabled}
//                             readOnly={readOnly}
//                             autoFocus={autoFocus}
//                             tabIndex={tabIndex}
//                             min={min}
//                             max={max}
//                             ref={ref}
//                         />
//                     )}
//                     {type === 'textarea' && (
//                         <textarea
//                             className={classNames('textarea max-w-full', inputClassName, {
//                                 'px-2': !prefix,
//                                 'pr-2 pl-1': prefix,
//                                 'textarea-bordered': bordered,
//                                 'textarea-error': error,
//                                 'w-full': fullWidth,
//                             })}
//                             name={name}
//                             value={value}
//                             rows={rows}
//                             placeholder={placeholder}
//                             required={isRequired}
//                             onChange={handleChange}
//                             onBlur={handleChange}
//                             onClick={onClick}
//                             onKeyUp={onKeyUp}
//                             onKeyDown={onKeyDown}
//                             tabIndex={tabIndex}
//                             disabled={disabled}
//                             readOnly={readOnly}
//                             ref={ref}
//                         />
//                     )}

//                     {type === 'tel' && (
//                         <input
//                             className={classNames('input', inputClassName, {
//                                 'input-bordered': bordered,
//                                 'input-error': error,
//                                 'w-full': fullWidth,
//                             })}
//                             name={name}
//                             type={type}
//                             value={value}
//                             placeholder={placeholder}
//                             onChange={handleChange}
//                             onBlur={handleChange}
//                             onClick={onClick}
//                             onKeyUp={onKeyUp}
//                             onKeyDown={onKeyDown}
//                             tabIndex={tabIndex}
//                             disabled={disabled}
//                             readOnly={readOnly}
//                             autoFocus={autoFocus}
//                             ref={ref}
//                         />
//                     )}
//                     {suffix && <span>{suffix}</span>}
//                     {addonRight && <span className="addon-right">{addonRight}</span>}
//                 </label>
//                 {showCounter && maxLength && (
//                     <div
//                         className={`row-flex justify-end text-xs ${
//                             ((value && value.length) || 0) >= maxLength
//                                 ? 'text-error'
//                                 : 'text-disabled-100'
//                         }`}
//                     >
//                         {(value && value.length) || 0}/{maxLength}
//                     </div>
//                 )}
//                 {error && errorMessage ? (
//                     <div className="text-sm font-normal pt-1 text-error">{errorMessage}</div>
//                 ) : null}
//             </div>
//         );
//     }
// );

// export default Input;
