import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { gray, white, black } from '../utils/colors'
import { connect } from 'react-redux'
import { getDeck, getDecks } from '../utils/api'

export class DeckDetail extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Deck Details'
    }
  }

  render() {
    const { deck } = this.props
    const { navigate } = this.props.navigation

    return (
      <View style={styles.container}>
        <Text>{JSON.stringify(this.props.deck)}</Text>
        <Text style={{ fontSize: 40, fontWeight: 'bold' }}>{deck.title}</Text>
        <Text style={{ fontSize: 20, color: gray }}>{deck.questions.length} cards</Text>
        <TouchableOpacity 
          style={styles.addCardBtn}
          onPress={() => navigate('AddCard', { deck })}>
          <Text style={[styles.btnText, {color: black}]}>
            Add Card
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.startQuizBtn}>
          <Text style={[styles.btnText, {color: white}]}>
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
  }
});

function mapStateToProps (decks, { navigation }) {
  const { deckId } = navigation.state.params
  return {
    deck: decks[deckId]
  }
}

export default connect(mapStateToProps)(DeckDetail)