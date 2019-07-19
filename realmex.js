import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator,createAppContainer} from 'react-navigation'
import LoginScreen from './loginscreen';
const Realm = require('realm');

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { realm: null,
      name:null
    
    };
  }
  componentWillMount() {
    Realm.open({
      schema: [{name: 'Dog', properties: {name: 'string'}}]
    }).then(realm => {
      realm.write(() => {
        realm.create('Dog', {name: 'Rex'});
      });
      this.setState({ realm });
      this.setState({name:  this.state.realm.objects('Dog').length});
      console.log(Array.from(realm.objects('Dog')))
    });
  }

  render() {
   

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          {this.state.name}
        </Text>
      </View>
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