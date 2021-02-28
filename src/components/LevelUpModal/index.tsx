import React, { useContext } from 'react'
import classes from './styles.module.scss'
import ChallengesContext from '../../contexts/ChallengesContext'

import { IoLogoTwitter } from 'react-icons/io5'

const LevelUpModal: React.FunctionComponent = () => {
  const { level, toggleLevelUpModal } = useContext(ChallengesContext)

  return (
    <>
      <div className={classes.overlay}></div>
      <div className={classes.modal}>
        <header>{level}</header>
        <strong>Parabéns</strong>
        <p>Você alcançou um novo nível</p>
        <button
          type="button"
          className={classes.closeButton}
          onClick={toggleLevelUpModal}
        >
          <img src="/icons/close.svg" alt="Close" />
        </button>
        <button type="button" className={classes.twitterButton}>
          Compartilhar no Twitter
          <IoLogoTwitter />
        </button>
      </div>
    </>
  )
}

export default LevelUpModal
