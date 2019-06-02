import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { gray, white, black } from '../utils/colors'

export class DeckDetail extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { deck } = navigation.state.params
    return {
      title: deck.title
    }
  }

  render() {
    const { deck } = this.props.navigation.state.params

    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 40, fontWeight: 'bold' }}>{deck.title}</Text>
        <Text style={{ fontSize: 20, color: gray }}>{deck.questions.length} cards</Text>
        <TouchableOpacity style={styles.addCardBtn}>
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

export default DeckDetail