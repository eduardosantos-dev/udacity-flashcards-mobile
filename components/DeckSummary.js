import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { white, gray } from '../utils/colors'

export default class DeckSummary extends React.Component {
  render() {
    const { deck } = this.props
    const { navigate } = this.props.navigation
    return (
      <TouchableOpacity onPress={() => navigate('DeckDetail',{ deck })}>
        <View style={styles.container}>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{deck.title}</Text>
          <Text style={{color: gray}}>{deck.questions ? deck.questions.length : 0} cards</Text>
        </View>
      </TouchableOpacity>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    alignItems: 'center',
    justifyContent: 'center',
    height: 200,
    borderBottomColor: gray,
    borderBottomWidth: 1,
  }
});
