import React from 'react'
import { NextPage } from 'next/types'
import classes from '../styles/index.module.scss'

import ExperienceBar from '../components/ExperienceBar'
import Profile from '../components/Profile'

const Home: NextPage = () => {
  return (
    <div className={classes.root}>
      <ExperienceBar />

      <section>
        <div>
          <Profile />
        </div>
        <div></div>
      </section>
    </div>
  )
}

export default Home
