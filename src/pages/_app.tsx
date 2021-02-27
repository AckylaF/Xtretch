import React from 'react'
import { AppProps } from 'next/app'
import '../styles/globals.scss'

import { ChallengesProvider } from '../contexts/ChallengesContext'

const MyApp: React.FunctionComponent<AppProps> = ({ Component, pageProps }) => {
  return (
    <ChallengesProvider>
      <Component {...pageProps} />
    </ChallengesProvider>
  )
}

export default MyApp
