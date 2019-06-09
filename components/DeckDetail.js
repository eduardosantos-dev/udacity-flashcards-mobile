import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { gray, white, black } from '../utils/colors'
import { connect } from 'react-redux'

export class DeckDetail extends React.Component {
  render() {
    const { deck } = this.props
    const { navigate } = this.props.navigation

    return (
      <View style={styles.container}>
        <Text style={styles.deckTitle}>{deck.title}</Text>
        <CardCounter deck={deck} style={{ color: gray, fontSize: 20 }} />
        <TouchableOpacity
          style={styles.addCardBtn}
          onPress={() => navigate('AddCard', { deck })}>
          <Text style={[styles.btnText, { color: black }]}>
            Add Card
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          disabled={deck.questions.length === 0}
          style={styles.startQuizBtn}
          onPress={() => navigate('Quiz', { deck })}>
          <Text style={[styles.btnText, { color: white }]}>
            Start Quiz
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addCardBtn: {
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
  startQuizBtn: {
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
  deckTitle: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});

function mapStateToProps(decks, { navigation }) {
  const { deckId } = navigation.state.params
  return {
    deck: decks[deckId]
  }
}

export default connect(mapStateToProps)(DeckDetail)