import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import DeckSummary from './DeckSummary'
import { getDecks } from '../utils/api'
import { connect } from 'react-redux';
import { receiveDecks } from '../actions';

export class DecksList extends React.Component {
  state = {
    ready: false
  }

  componentDidMount() {
    const { dispatch } = this.props

    getDecks()
      .then((decks) => {
        dispatch(receiveDecks(decks))
      })
      .then(() => this.setState(() => ({
        ready: true,
      })))
  }

  renderItem = (item, decks) => {
    const deckId = item
    return <DeckSummary deck={decks[deckId]} navigation={this.props.navigation} />
  }

  render() {
    const { decks } = this.props
    
    return (
      <View style={styles.container}>
        {decks ?
          <FlatList
            data={Object.keys(decks)}
            renderItem={({ item }) => this.renderItem(item, decks)}
            keyExtractor={(item, index) => index.toString()}
          />
          : <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>No decks yet :(</Text>
          </View>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});

function mapStateToProps(decks) {
  return {
    decks
  }
}

export default connect(mapStateToProps)(DecksList)