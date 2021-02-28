import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from 'react'
import ChallengesContext from './ChallengesContext'

interface CountdownContextData {
  isActive: boolean
  hasFinished: boolean
  minutes: number
  seconds: number
  startCountdown: () => void
  resetCountdown: () => void
}

interface CountdownContextProps {
  children: ReactNode
}

const CountdownContext = createContext({} as CountdownContextData)

let countdownTimeout: NodeJS.Timeout

export const CountdownProvider: React.FunctionComponent<CountdownContextProps> = ({
  children
}) => {
  const { startNewChallenge } = useContext(ChallengesContext)
  const [time, setTime] = useState(0.05 * 60)
  const [isActive, setIsActive] = useState(false)
  const [hasFinished, setHasFinished] = useState(false)

  const minutes = Math.floor(time / 60)
  const seconds = time % 60

  const startCountdown = () => setIsActive(true)

  const resetCountdown = () => {
    clearTimeout(countdownTimeout)
    setIsActive(false)
    setHasFinished(false)
    setTime(25 * 60)
  }

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1)
      }, 1000)
    } else if (time === 0) {
      setIsActive(false)
      setHasFinished(true)
      startNewChallenge()
    }
  }, [isActive, time])

  return (
    <CountdownContext.Provider
      value={{
        isActive,
        hasFinished,
        minutes,
        seconds,
        startCountdown,
        resetCountdown
      }}
    >
      {children}
    </CountdownContext.Provider>
  )
}

export default CountdownContext
