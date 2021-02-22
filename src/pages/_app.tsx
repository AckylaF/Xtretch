import React from 'react'
import { AppProps } from 'next/app'
import '../../public/styles/globals.scss'

const MyApp: React.FunctionComponent<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

export default MyApp
