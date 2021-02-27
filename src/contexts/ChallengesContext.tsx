import React, { createContext, ReactNode, useState } from 'react'
import challenges from '../../challenges.json'

interface Challenge {
  type: string
  description: string
  amount: number
}

interface ChallengesContextData {
  level: number
  currentExperience: number
  experienceToNextLevel: number
  completedChallenges: number
  activeChallenge: Challenge
  levelUp: () => void
  startNewChallenge: () => void
  resetChallenge: () => void
}

interface ChallengesContextProps {
  children: ReactNode
}

const ChallengesContext = createContext({} as ChallengesContextData)
const initialChallengeState = {
  type: '',
  description: '',
  amount: 0
}

export const ChallengesProvider = ({ children }: ChallengesContextProps) => {
  const [level, setLevel] = useState(1)
  const [currentExperience, setCurrentExperience] = useState(0)
  const [completedChallenges, setCompletedChallenges] = useState(0)
  const [activeChallenge, setActiveChallenge] = useState(initialChallengeState)

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2)

  const levelUp = () => setLevel(prevState => prevState + 1)

  const startNewChallenge = () => {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
    const challenge = challenges[randomChallengeIndex]

    setActiveChallenge(challenge)
  }

  const resetChallenge = () => setActiveChallenge(initialChallengeState)

  return (
    <ChallengesContext.Provider
      value={{
        level,
        currentExperience,
        experienceToNextLevel,
        completedChallenges,
        activeChallenge,
        levelUp,
        startNewChallenge,
        resetChallenge
      }}
    >
      {children}
    </ChallengesContext.Provider>
  )
}

export default ChallengesContext
