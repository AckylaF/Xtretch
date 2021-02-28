import React, { useContext } from 'react'
import { NextPage } from 'next/types'
import Head from 'next/head'
import classes from '../styles/index.module.scss'

import { CountdownProvider } from '../contexts/CountdownContext'
import ChallengesContext from '../contexts/ChallengesContext'

import ExperienceBar from '../components/ExperienceBar'
import Profile from '../components/Profile'
import CompletedChallenges from '../components/CompletedChallenges'
import Countdown from '../components/Countdown'
import ChallengeBox from '../components/ChallengeBox'
import LevelUpModal from '../components/LevelUpModal'

const Home: NextPage = () => {
  const { isModalActive } = useContext(ChallengesContext)

  return (
    <>
      <CountdownProvider>
        <Head>
          <title>Início | Xtretch</title>
        </Head>
        <div className={classes.root}>
          <ExperienceBar />

          <section>
            <div>
              <Profile />
              <CompletedChallenges />
              <Countdown />
            </div>

            <ChallengeBox />
          </section>
        </div>
        {isModalActive && <LevelUpModal />}
      </CountdownProvider>
    </>
  )
}

export default Home
