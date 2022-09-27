import React, { Children } from 'react'
import { useEffect, useState } from 'react'
import classes from './styles.module.css'

export const PasswordGenerator = (props) => {
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
export default PasswordGenerator
