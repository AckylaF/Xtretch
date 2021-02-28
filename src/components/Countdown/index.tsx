import React, { useContext } from 'react'
import classes from './styles.module.scss'

import CountdownContext from '../../contexts/CountdownContext'

import Button from '../CountdownButton'

const Countdown: React.FunctionComponent = () => {
  const {
    minutes,
    seconds,
    isActive,
    hasFinished,
    resetCountdown,
    startCountdown
  } = useContext(CountdownContext)

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')

  return (
    <>
      <div className={classes.root}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>
      <Button
        isActive={isActive}
        hasFinished={hasFinished}
        startCountdown={startCountdown}
        resetCountdown={resetCountdown}
      ></Button>
    </>
  )
}

export default Countdown
