import React from 'react'
import classes from './styles.module.scss'

const ExperienceBar: React.FunctionComponent = () => {
  return (
    <header className={classes.root}>
      <span>0 xp</span>
      <progress value="50" max="100">
        300 xp
      </progress>
      <span>600 xp</span>
    </header>
  )
}

export default ExperienceBar
