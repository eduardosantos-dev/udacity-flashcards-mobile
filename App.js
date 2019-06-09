import React from 'react'
import { StyleSheet, StatusBar, View } from 'react-native'
import DecksList from './components/DecksList'
import DeckDetail from './components/DeckDetail'
import Quiz from './components/Quiz'
import QuizScore from './components/QuizScore'
import AddDeck from './components/AddDeck'
import AddCard from './components/AddCard'
import { white, black } from './utils/colors'
import { Constants } from 'expo'
import { createMaterialTopTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation'
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import reducer from './reducers'

function AppStatusBar({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

const RouteConfigs = {
  DecksList: {
    screen: DecksList,
    navigationOptions: {
      tabBarLabel: 'Decks',
      tabBarIcon: ({ tintColor }) => <Ionicons name='ios-list' size={30} color={tintColor} />
    }
  },
  AddDeck: {
    screen: AddDeck,
    navigationOptions: {
      tabBarLabel: 'New Deck',
      tabBarIcon: ({ tintColor }) => <FontAwesome name='plus-square' size={30} color={tintColor} />
    },
  },
}

const TabNavigatorConfig = {
  navigationOptions: {
    header: null
  },
  tabBarOptions: {
    activeTintColor: white,
    style: {
      height: 56,
      backgroundColor: black,
      shadowColor: 'rgba(0, 0, 0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 6,
      shadowOpacity: 1
    }
  }
}

const Tabs = createMaterialTopTabNavigator(RouteConfigs, TabNavigatorConfig)

const navigationOptions = {
  headerTintColor: white,
  headerStyle: {
    backgroundColor: black
  }
}

const StackNavigator = createStackNavigator({
  Home: Tabs,
  DeckDetail: {
    screen: DeckDetail,
    navigationOptions: {
      ...navigationOptions,
      title: 'Deck Details'
    }
  },
  AddCard: {
    screen: AddCard,
    navigationOptions: {
      ...navigationOptions,
      title: 'Add Card'
    }
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      ...navigationOptions,
      title: 'Quiz'
    }
  },
  QuizScore: {
    screen: QuizScore,
    navigationOptions: {
      ...navigationOptions,
      title: 'Score',
      headerLeft: null,
    }
  }
})

const TabsContainer = createAppContainer(StackNavigator)

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={styles.container}>
          <AppStatusBar backgroundColor={black} barStyle='light-content' />
          <TabsContainer />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
