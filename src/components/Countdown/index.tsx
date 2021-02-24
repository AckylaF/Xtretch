import React, { useState, useEffect } from 'react'
import classes from './styles.module.scss'

const Countdown: React.FunctionComponent = () => {
  const [time, setTime] = useState(25 * 60)
  const [active, setActive] = useState(false)

  const startCountdown = () => setActive(!active)

  const minutes = Math.floor(time / 60)
  const seconds = time % 60

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')

  useEffect(() => {
    if (active && time > 0) {
      setTimeout(() => {
        setTime(time - 1)
      }, 1000)
    }
  }, [active, time])

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
      <button className={classes.button} onClick={startCountdown}>
        {!active ? 'Iniciar um ciclo' : 'Encerrar ciclo'}
      </button>
    </>
  )
}

export default Countdown
