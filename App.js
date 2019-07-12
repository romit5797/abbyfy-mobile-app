import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator,createAppContainer} from 'react-navigation'
import LoginScreen from './loginscreen';

export default class App extends React.Component {
  render() {
    return (
      <AppContainer  />
    );
  }
}


const RootStack = createStackNavigator(
  {
      Loginscreen : LoginScreen
  },
  {
    initialRouteName: 'Loginscreen',
    headerMode: 'none'
  }
);

const AppContainer = createAppContainer(RootStack);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
