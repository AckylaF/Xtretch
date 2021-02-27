import React, { useContext } from 'react'
import classes from './styles.module.scss'
import ChallengesContext from '../../contexts/ChallengesContext'

const ExperienceBar: React.FunctionComponent = () => {
  const { currentExperience, experienceToNextLevel } = useContext(
    ChallengesContext
  )

  return (
    <header className={classes.root}>
      <span>0 xp</span>
      <progress value={currentExperience} max={experienceToNextLevel}>
        {currentExperience} xp
      </progress>
      <span>{experienceToNextLevel} xp</span>
    </header>
  )
}

export default ExperienceBar
