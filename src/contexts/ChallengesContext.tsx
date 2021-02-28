import React, { createContext, ReactNode, useEffect, useState } from 'react'
import Cookies from 'js-cookie'
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
  isModalActive: boolean
  levelUp: () => void
  toggleLevelUpModal: () => void
  startNewChallenge: () => void
  resetChallenge: () => void
  completeChallenge: () => void
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

export const ChallengesProvider: React.FunctionComponent<ChallengesContextProps> = ({
  children
}) => {
  const [level, setLevel] = useState(1)
  const [currentExperience, setCurrentExperience] = useState(0)
  const [completedChallenges, setCompletedChallenges] = useState(0)
  const [activeChallenge, setActiveChallenge] = useState(initialChallengeState)
  const [isModalActive, setIsModalActive] = useState(false)

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2)

  const toggleLevelUpModal = () => setIsModalActive(prevState => !prevState)

  const levelUp = () => {
    setLevel(prevState => prevState + 1)
    toggleLevelUpModal()
  }

  const startNewChallenge = () => {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
    const challenge = challenges[randomChallengeIndex]

    setActiveChallenge(challenge)

    new Audio('/notification.mp3').play()

    if (Notification.permission === 'granted') {
      return new Notification('Novo desafio', {
        body: `Valendo ${challenge.amount} xp!`
      })
    }
  }

  const resetChallenge = () => setActiveChallenge(initialChallengeState)

  const completeChallenge = () => {
    if (!activeChallenge.type) return

    const { amount } = activeChallenge
    let finalExperience = currentExperience + amount

    if (finalExperience >= experienceToNextLevel) {
      finalExperience = finalExperience - experienceToNextLevel
      levelUp()
    }

    setCurrentExperience(finalExperience)
    resetChallenge()
    setCompletedChallenges(prevState => prevState + 1)
  }

  useEffect(() => {
    Notification.requestPermission()

    setLevel(Number(Cookies.get('level')))
    setCurrentExperience(Number(Cookies.get('currentExperience')))
    setCompletedChallenges(Number(Cookies.get('completedChallenges')))
  }, [])

  useEffect(() => {
    Cookies.set('level', String(level))
    Cookies.set('currentExperience', String(currentExperience))
    Cookies.set('completedChallenges', String(completedChallenges))
  }, [level, currentExperience, completedChallenges])

  return (
    <ChallengesContext.Provider
      value={{
        level,
        currentExperience,
        experienceToNextLevel,
        completedChallenges,
        activeChallenge,
        isModalActive,
        levelUp,
        toggleLevelUpModal,
        startNewChallenge,
        resetChallenge,
        completeChallenge
      }}
    >
      {children}
    </ChallengesContext.Provider>
  )
}

export default ChallengesContext
