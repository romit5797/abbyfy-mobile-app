import React, { Component } from 'react';
import {StyleSheet,
  Text,
  View,
  Picker,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert } from 'react-native';
  import { createStackNavigator, createAppContainer } from 'react-navigation'; 
  import axios from 'axios';
  import Test from './test';
  import { Dropdown } from 'react-native-material-dropdown';
  import { Header,ThemeProvider } from 'react-native-elements';
 
  
class Login extends Component {
  constructor(props) {
    super(props);
    state = {
      email   : '',
      password: '',
      type: 'select'
    }
    this.setType=this.setType.bind(this);
  }
 
  FunctionToOpenSecondActivity = () =>
  {
    if(this.state.type=="select")
    {
     Alert.alert("Please select login type"); 
    }else{
  
      axios.post('http://35.229.19.138:8080/login/', {
        email: this.state.email,
        password: this.state.password,
        category: this.state.type
      })
      .then((response) => {
        
        if(response.data.output.length === 0 )
        {
            Alert.alert("INVALID CREDENTIALS"); 
        }
        else {
          this.props.navigation.navigate('Details', {
            type: this.state.type,
            email: this.state.email,
          });
        }
      })
      .catch((e) => 
      {
        console.error(e);
      });

         }   
  }
  setType(val)
  {
    this.setState({type : val});
  }
  onClickListener = (viewId) => {
    Alert.alert("Alert", "Button pressed "+viewId);
  }

  render() {
    let data = [{
      value: 'Manufacturer',
    }, {
      value: 'Distributor',
    }, {
      value: 'Retailer',
    }];

    return (
      <View style={{flex: 10}}>
        
        <Header backgroundColor="green"
  leftComponent={{ icon: 'menu', color: '#fff' }}
  centerComponent={{ text: 'Abbyfy', style: { color: '#fff' } }}
  rightComponent={{ icon: 'scanner', color: '#fff' }}
/>
      
    
      <View style={styles.container}>
       
       <View>
       <Dropdown 
        containerStyle={{borderColor:'lightgrey', borderRadius:10, width:250, height:90, paddingLeft:10}}
        rippleCentered={true}
        inputContainerStyle={{ borderBottomColor: 'green' }}
        label='select'
        data={data}
        onChangeText={(value)=>{this.setType(value)}}

      />
       </View>
         
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://static.thenounproject.com/png/12462-200.png'}}/>
          <TextInput style={styles.inputs}
              placeholder="Email"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(email) => this.setState({email})}/>


        </View>
        
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'data:image/png;base64,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'}}/>
          <TextInput style={styles.inputs}
              placeholder="Password"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(password) => this.setState({password})}/>
        </View>

        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.FunctionToOpenSecondActivity() }>
          <Text style={styles.loginText}>Login</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.buttonContainer} onPress={() => this.onClickListener('restore_password')}>
            <Text>Forgot your password?</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.buttonContainer} onPress={() => this.onClickListener('register')}>
            <Text>Register</Text>
        </TouchableHighlight>
      </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 9,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCDCDC',
  },
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      width:250,
      height:45,
      marginBottom:20,
      flexDirection: 'row',
      alignItems:'center'
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
  inputIcon:{
    width:30,
    height:30,
    marginLeft:15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
  },
  loginButton: {
    backgroundColor: "green",
  },
  loginText: {
    color: 'white',
  }
});
 

const RootStack = createStackNavigator(
    {
        Loginscreen : Login,
      Details: Test,
    },
    {
      initialRouteName: 'Loginscreen',
      headerMode: 'none'
    }
  );
  
  const AppContainer = createAppContainer(RootStack);
  
export default class LoginApp extends React.Component {
    render() {
      return <AppContainer />;
    }
  }

  
 