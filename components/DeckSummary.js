import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { white, gray } from '../utils/colors'
import { connect } from 'react-redux';
import CardCounter from './CardCounter'

export class DeckSummary extends React.Component {
  render() {
    const { deck, deckId } = this.props
    const { navigate } = this.props.navigation
    return (
      <TouchableOpacity onPress={() => navigate('DeckDetail', { deckId })}>
        <View style={styles.container}>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{deck.title}</Text>
          <CardCounter deck={deck} style={{color: gray}}/>
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

function mapStateToProps(decks, { deckId } ) {
  return {
    deck: decks[deckId]
  }
}

export default connect(mapStateToProps)(DeckSummary)