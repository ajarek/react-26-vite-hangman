import React from 'react'

import classes from './styles.module.css'

export const HangmanImage = (props) => {
  const {
    className,
    numer,
    ...otherProps
  } = props

  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >
      <img src={`src/assets/images/${numer}.jpg`}/>
    </div>
  )
}
export default HangmanImage
