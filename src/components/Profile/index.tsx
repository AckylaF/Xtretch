import classes from './styles.module.scss'
import React from 'react'

const Profile: React.FunctionComponent = () => {
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
          <p>Level 1</p>
        </span>
      </div>
    </div>
  )
}

export default Profile
