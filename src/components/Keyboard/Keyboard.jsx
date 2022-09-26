import React from 'react'

import classes from './styles.module.css'

export const Keyboard = (props) => {
  const {
    className,
    onClick,
    ...otherProps
  } = props
  const alphabet = ['a', 'ą', ' b', 'c', 'ć', 'd', 'e', 'ę', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'ł', 'm', 'n', 'ń', 'o', 'ó', 'p',  'r', 's', 'ś', 't', 'u',  'w',  'y', 'z', 'ź', 'ż']

 
  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >
      {alphabet.map(letter=>
      <div
      key={letter}
      className={classes.letter}
      onClick={onClick}
      >
        {letter.toUpperCase()}
        </div>
        )}

    </div>
  )
}
export default Keyboard
