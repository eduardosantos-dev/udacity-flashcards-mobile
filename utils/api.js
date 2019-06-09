import { AsyncStorage } from 'react-native'
import uuid from "uuid"

const DECKS_STORAGE_KEY = 'FlashCards:decks'

function setDummyData() {
  const dummyData = {
    'React': {
      title: 'React',
      questions: [
        {
          question: 'What is React?',
          answer: 'A library for managing user interfaces'
        },
        {
          question: 'Where do you make Ajax requests in React?',
          answer: 'The componentDidMount lifecycle event'
        }
      ]
    },
    'JavaScript': {
      title: 'JavaScript',
      questions: [
        {
          question: 'What is a closure?',
          answer: 'The combination of a function and the lexical environment within which that function was declared.'
        }
      ]
    },
    'Redux': {
      title: 'Redux',
      questions: [
        {
          question: 'What is React?',
          answer: 'A library for managing user interfaces'
        },
        {
          question: 'Where do you make Ajax requests in React?',
          answer: 'The componentDidMount lifecycle event'
        },
        {
          question: 'What is redux?',
          answer: 'The componentDidMount lifecycle event'
        }
      ]
    },
  }

  AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(dummyData))
  return dummyData
}

export function getDecks() {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then((results) =>
      results === null
        ? setDummyData()
        : JSON.parse(results))
}

export function getDeck(deckId) {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then((result) => JSON.parse(result)[deckId])
}

export function submitDeck({ deck, key }) {
  return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
    [key]: deck
  }))
}

export function addCardToDeck(card, deck) {
  const { questions } = deck
  AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
    [deck.title]: {
      questions: questions.concat(card)
    }
  }))
}