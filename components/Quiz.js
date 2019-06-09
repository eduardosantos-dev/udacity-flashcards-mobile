import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import CardFlip from 'react-native-card-flip'
import { white, black, lightPurp } from '../utils/colors'

export class Quiz extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cardIndex: 0,
      deckLength: 0,
      correctAnswers: 0
    }
  }

  showScore = () => {
    const { navigate } = this.props.navigation
    navigate('QuizScore', ({
      correctAnswers: this.state.correctAnswers,
      deckLength: this.state.deckLength
    }))
  }

  handleAnswerPress = (card, result) => {
    const { cardIndex, deckLength } = this.state

    if (cardIndex < deckLength - 1) {
      card.flip()
      this.setState({
        cardIndex: this.state.cardIndex + 1,
        correctAnswers: this.state.correctAnswers + (result === 'correct' ? 1 : 0)
      })
    } else {
      this.showScore()
    }
  }

  componentDidMount = () => {
    const { deck } = this.props.navigation.state.params
    this.setState({
      deckLength: deck.questions.length
    })
  }

  render() {
    const { deck } = this.props.navigation.state.params
    const { questions } = deck
    const { cardIndex } = this.state

    return (
      <View style={styles.container}>
        <Text style={styles.cardCounter}>{cardIndex + 1}/{this.state.deckLength}</Text>
        <CardFlip style={styles.cardContainer} ref={(card) => this.card = card} duration={50}>
          <TouchableOpacity
            activeOpacity={1}
            style={[styles.card, styles.card1]}
            onPress={() => this.card.flip()} >
            <Text style={styles.label}>
              {questions && questions[cardIndex].question}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={1} style={[styles.card, styles.card2]}
            onPress={() => this.card.flip()} >
            <View style={styles.answerContainer}>
              <Text style={styles.label}>
                {questions && questions[cardIndex].answer}
              </Text>
              <TouchableOpacity style={[styles.answerButton, { backgroundColor: '#008000' }]}
                onPress={() => this.handleAnswerPress(this.card, 'correct')}>
                <Text style={styles.btnText}>
                  Correct
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.answerButton, { backgroundColor: '#D4271B' }]}
                onPress={() => this.handleAnswerPress(this.card, 'incorrect')}>
                <Text style={styles.btnText}>
                  Incorrect
                </Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </CardFlip>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  cardContainer: {
    width: 320,
    height: 470
  },
  card: {
    width: 320,
    height: 470,
    backgroundColor: '#FE474C',
    borderRadius: 5,
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.5,
    justifyContent: 'center',
  },
  card1: {
    backgroundColor: '#FE474C',
  },
  card2: {
    backgroundColor: '#650baa',
  },
  label: {
    textAlign: `center`,
    fontSize: 40,
    color: white,
    backgroundColor: 'transparent',
    padding: 25
  },
  answerButton: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    height: 50,
    width: 200,
    marginTop: 25
  },
  answerContainer: {
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  btnText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: white
  },
  cardCounter: {
    textAlign: 'center',
    marginBottom: 30,
    fontSize: 20,
    fontWeight: 'bold'
  }
});

export default Quiz