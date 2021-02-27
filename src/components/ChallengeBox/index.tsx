/* eslint-disable multiline-ternary */
import React, { useContext } from 'react'
import classes from './styles.module.scss'
import ChallengesContext from '../../contexts/ChallengesContext'

import Button from '../Button'

const ChallengeBox: React.FunctionComponent = () => {
  const { activeChallenge, resetChallenge } = useContext(ChallengesContext)

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
            {/* THIS IS NOT RIGHT */}
            <Button color="red" fn={resetChallenge}>
              Falhei
            </Button>
            <Button color="green">Completei</Button>
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
