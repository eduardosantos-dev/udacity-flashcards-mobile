import { AsyncStorage } from 'react-native'

const DECKS_STORAGE_KEY = 'FlashCards:decks'

function setDummyData() {
  const dummyData = {
    '0': {
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
    '1': {
      title: 'JavaScript',
      questions: [
        {
          question: 'What is a closure?',
          answer: 'The combination of a function and the lexical environment within which that function was declared.'
        }
      ]
    },
    '2': {
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
    .then(() => setDummyData())
}

export function getDeck() {

}

export function saveDeckTitle() {

}

export function addCardToDeck() {

}