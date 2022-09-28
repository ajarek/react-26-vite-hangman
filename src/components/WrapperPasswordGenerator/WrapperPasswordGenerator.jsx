import React from 'react'
import classes from './styles.module.css'

export const WrapperPasswordGenerator = (props) => {
  const {
    className,
    password,
    children,
    ...otherProps
  } = props
  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >
{children}
   

    </div>
  )
}
export default WrapperPasswordGenerator
