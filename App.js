import React from 'react';
import { ActivityIndicator,AsyncStorage,StyleSheet, Text,View } from 'react-native';
import { createStackNavigator,createAppContainer} from 'react-navigation'
import LoginScreen from './loginscreen';
import Test from './test';


var initialroute="Loginscreen";

class App extends React.Component {

  
  componentDidMount() {
    
    AsyncStorage.getItem('loggedin').then((token) => {
      if(token=="true")
      {
        this.props.navigation.navigate('Loggedin');
      }
      else{
        this.props.navigation.navigate('Loginscreen');
      }
        });
    }
  
  render() {
    return (

      <View style = {styles.container}>
      
      <ActivityIndicator size="large" color="#808000" style = {styles.activityIndicator}/>
     
    </View>
    );
  }
}


const RootStack = createStackNavigator(
  {
      Base : App,
      Loginscreen : LoginScreen,
      Loggedin : Test
  },
  {
    initialRouteName: 'Base',
    headerMode: 'none'
  }
);

RootStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = false;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
};

const AppContainer = createAppContainer(RootStack);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 70
 },
 activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 80
 }
});

  
export default class LoginApp extends React.Component {
  render() {
    return <AppContainer />;
  }
}

