import React from 'react'
import { NextPage } from 'next/types'
import Head from 'next/head'
import classes from '../styles/index.module.scss'

import ExperienceBar from '../components/ExperienceBar'
import Profile from '../components/Profile'
import CompletedChallenges from '../components/CompletedChallenges'
import Countdown from '../components/Countdown'
import ChallengeBox from '../components/ChallengeBox'

const Home: NextPage = () => {
  return (
    <>
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
    </>
  )
}

export default Home
