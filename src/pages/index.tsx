import React from 'react'
import { NextPage } from 'next/types'
import Head from 'next/head'
import classes from '../styles/index.module.scss'
import { CountdownProvider } from '../contexts/CountdownContext'

import ExperienceBar from '../components/ExperienceBar'
import Profile from '../components/Profile'
import CompletedChallenges from '../components/CompletedChallenges'
import Countdown from '../components/Countdown'
import ChallengeBox from '../components/ChallengeBox'

const Home: NextPage = () => {
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
      </CountdownProvider>
    </>
  )
}

export default Home
