import React, { useContext } from 'react'
import classes from './styles.module.scss'
import ChallengesContext from '../../contexts/ChallengesContext'

const CompletedChallenges: React.FunctionComponent = () => {
  const { completedChallenges } = useContext(ChallengesContext)

  return (
    <div className={classes.root}>
      <span>Desafios completos</span>
      <span>{completedChallenges}</span>
    </div>
  )
}

export default CompletedChallenges
