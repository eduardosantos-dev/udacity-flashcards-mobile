import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class QuizScore extends Component {
  calculateScore = (correct, total) => {
    return (correct / total) * 100
  }

  render() {
    const { correctAnswers, deckLength } = this.props.navigation.state.params
    return (
      <View>
        <Text>
          {this.calculateScore(correctAnswers, deckLength)}%
        </Text>
      </View >
    )
  }
}