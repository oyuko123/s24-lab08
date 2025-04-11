import { FlashCard } from './flashcard.js'

interface CardStatus {
  getCard: () => FlashCard
  getResults: () => boolean[]
  recordResult: (success: boolean) => void
  clearResults: () => void
  getRecentMistakeTime: () => number | null
}

function newCardStatus (card: FlashCard): CardStatus {
  let history: Array<{ success: boolean, time: number }> = []

  return {
    getCard: () => card,
    getResults: () => history.map(h => h.success),
    recordResult: (success: boolean) => history.push({ success, time: Date.now() }),
    clearResults: () => { history = [] },
    getRecentMistakeTime: () => {
      const lastMistake = [...history].reverse().find(h => !h.success)
      return (lastMistake != null) ? lastMistake.time : null
    }
  }
}

export { CardStatus, newCardStatus }
