import React, { useState, useEffect, useContext } from 'react'
import classes from './styles.module.scss'

import ChallengesContext from '../../contexts/ChallengesContext'

import Button from '../CountdownButton'

let countdownTimeout: NodeJS.Timeout

const Countdown: React.FunctionComponent = () => {
  const [time, setTime] = useState(0.05 * 60)
  const [isActive, setIsActive] = useState(false)
  const [hasFinished, setHasFinished] = useState(false)
  const { startNewChallenge } = useContext(ChallengesContext)

  const startCountdown = () => setIsActive(true)
  const resetCountdown = () => {
    clearTimeout(countdownTimeout)
    setIsActive(false)
    setTime(25 * 60)
  }

  const minutes = Math.floor(time / 60)
  const seconds = time % 60

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1)
      }, 1000)
    } else if (time === 0) {
      setIsActive(false)
      setHasFinished(true)
      startNewChallenge()
    }
  }, [isActive, time])

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
