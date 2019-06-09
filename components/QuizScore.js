import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { gray, white, black } from '../utils/colors'

export default class QuizScore extends Component {
  calculateScore = (correct, total) => {
    return ((correct / total) * 100).toFixed(2)
  }

  render() {
    const { correctAnswers, deckLength, deck } = this.props.navigation.state.params
    const { navigation } = this.props
    return (
      <View style={styles.container}>
        <Text style={[styles.textCenter,{ fontSize: 40, fontWeight: 'bold' }]}>
          You scored {this.calculateScore(correctAnswers, deckLength)}% in {deck.title}
        </Text>
        <TouchableOpacity
          style={styles.restartQuizBtn}
          onPress={() => navigation.navigate('Quiz', { deck })}
        >
          <Text style={[styles.btnText, { color: black }]}>
            Restart Quiz
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.returnToDeckBtn}
          onPress={() => navigation.navigate('DeckDetail', { deckId: deck.title })}>
            <Text style={[styles.btnText, { color: white }]}>
              Return to deck
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30
  },
  restartQuizBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: white,
    borderColor: black,
    borderRadius: 5,
    height: 50,
    width: 200,
    marginTop: 50,
    borderWidth: 1
  },
  returnToDeckBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: black,
    borderColor: gray,
    borderRadius: 5,
    height: 50,
    width: 200,
    marginTop: 20,
    borderWidth: 1
  },
  btnText: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  textCenter: {
    textAlign: 'center'
  }
});