import React from 'react'
import classes from './styles.module.scss'

const CompletedChallenges: React.FunctionComponent = () => {
  return (
    <div className={classes.root}>
      <span>Desafios completos</span>
      <span>5</span>
    </div>
  )
}

export default CompletedChallenges
