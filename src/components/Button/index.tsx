import React from 'react'
import classes from './styles.module.scss'

interface buttonProps {
  color: string
  fn?: () => void
}

const Button: React.FunctionComponent<buttonProps> = ({
  children,
  color,
  fn
}) => {
  return (
    <button
      className={`${classes.root} ${
        color === 'red' ? classes.failureButton : classes.successButton
      }`}
      onClick={fn}
    >
      {children}
    </button>
  )
}

export default Button
