/* eslint-disable multiline-ternary */
import React, { useContext } from 'react'
import classes from './styles.module.scss'

import ChallengesContext from '../../contexts/ChallengesContext'
import CountdownContext from '../../contexts/CountdownContext'

import Button from '../Button'

const ChallengeBox: React.FunctionComponent = () => {
  const { activeChallenge, resetChallenge, completeChallenge } = useContext(
    ChallengesContext
  )
  const { resetCountdown } = useContext(CountdownContext)

  const handleSucceededChallenge = () => {
    completeChallenge()
    resetCountdown()
  }

  const handleFailedChallenge = () => {
    resetChallenge()
    resetCountdown()
  }

  return (
    <div className={classes.root}>
      {activeChallenge.type ? (
        <div className={classes.challengeContainer}>
          <header>Ganhe {activeChallenge.amount} xp</header>
          <main>
            <img src={`icons/${activeChallenge.type}.svg`} alt="Exercite-se" />
            <h3>Exercite-se</h3>
            <p>{activeChallenge.description}</p>
          </main>
          <footer>
            <Button color="red" fn={handleFailedChallenge}>
              Falhei
            </Button>
            <Button color="green" fn={handleSucceededChallenge}>
              Completei
            </Button>
          </footer>
        </div>
      ) : (
        <>
          <strong>Finalize um ciclo para receber desafios</strong>
          <img src="icons/level-up.svg" alt="Level up" />
          <p>Suba de nível completando desafios.</p>
        </>
      )}
    </div>
  )
}

export default ChallengeBox
