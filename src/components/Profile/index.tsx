import React, { useContext } from 'react'
import classes from './styles.module.scss'
import ChallengesContext from '../../contexts/ChallengesContext'

const Profile: React.FunctionComponent = () => {
  const { level } = useContext(ChallengesContext)

  return (
    <div className={classes.root}>
      <img
        src="https://github.com/Ackylaf.png"
        alt=""
        className={classes.profileImage}
      />
      <div className={classes.info}>
        <h1>Ackyla Ferreira</h1>
        <span>
          <img src="/icons/level.svg" alt="level up" />
          <p>Level {level}</p>
        </span>
      </div>
    </div>
  )
}

export default Profile
