import { CardStatus } from '../../cards/cardstatus.js'
import { CardOrganizer } from '../cardorganizer.js'

function newRecentMistakesFirstSorter (): CardOrganizer {
  return {
    reorganize: (cards: CardStatus[]) => {
      return cards.slice().sort((a, b) => {
        const timeA = a.getRecentMistakeTime()
        const timeB = b.getRecentMistakeTime()
        if (timeA === null && timeB === null) return 0
        if (timeA === null) return 1
        if (timeB === null) return -1
        return timeB - timeA 
      })
    }
  }
}

export { newRecentMistakesFirstSorter }
