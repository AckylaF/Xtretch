import React from 'react'
import { NextPage } from 'next/types'
import Head from 'next/head'
import classes from '../styles/index.module.scss'

import ExperienceBar from '../components/ExperienceBar'
import Profile from '../components/Profile'
import CompletedChallenges from '../components/CompletedChallenges'
import Countdown from '../components/Countdown'

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
          <div></div>
        </section>
      </div>
    </>
  )
}

export default Home
