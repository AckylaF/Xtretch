/* eslint-disable multiline-ternary */
import React from 'react'
import {
  IoCloseOutline,
  IoCheckmarkSharp,
  IoCaretForward
} from 'react-icons/io5'
import classes from './styles.module.scss'

interface Props {
  isActive: boolean
  hasFinished: boolean
  startCountdown: any
  resetCountdown: any
}

const Button: React.FunctionComponent<Props> = ({
  isActive,
  hasFinished,
  startCountdown,
  resetCountdown
}) => {
  return (
    <button
      type="button"
      disabled={hasFinished}
      className={
        isActive ? `${classes.root} ${classes.activeButton}` : classes.root
      }
      onClick={isActive ? resetCountdown : startCountdown}
    >
      {isActive ? (
        <div>
          Abandonar ciclo
          <IoCloseOutline />
        </div>
      ) : hasFinished ? (
        <div>
          Ciclo encerrado
          <IoCheckmarkSharp className={classes.check} />
        </div>
      ) : (
        <div>
          Iniciar um ciclo
          <IoCaretForward />
        </div>
      )}
    </button>
  )
}

export default Button
