import React, { Component } from 'react';
import {StyleSheet,
  Text,
  View,
  Picker,
  TextInput,
  Button,
  TouchableHighlight,Keyboard,
  Image,
  Alert } from 'react-native';
  import Icon from 'react-native-vector-icons/Ionicons';  
  import { createStackNavigator, createAppContainer } from 'react-navigation'; 
  import axios from 'axios';
  import GpsRequest from './gpsrequest';
  import { Dropdown } from 'react-native-material-dropdown';
  import { Header,ThemeProvider } from 'react-native-elements';
 
  
class Otp extends Component {
  constructor(props) {
    super(props);
    state = {
      email   : '',
      otp: null
    }
   
  }

  Verifycred()
  {
   
     if(this.state.otp == this.state.email){
      this.setState({otp : null});
        this.props.navigation.navigate('Details', {
        });
      }
   else{
     Alert.alert("Invalid OTP")
   }
  }
 
 
  FunctionToOpenSecondActivity = () =>
  { let randno=Math.floor(100000 + Math.random() * 900000);
    
    axios.post('http://35.229.19.138:8080/otp/', {
      email: this.props.screenProps,
      otp: randno
    })
    .then((response) => {
     Alert.alert("OTP sent to "+this.props.screenProps)
    })
    .catch((e) => 
    {
      Alert.alert(e);
    });
    this.setState({otp : randno});
  }
 

  render() {
    return (
      <View style={{flex: 10}}>
        
        <View style={styles.headercontainer}>
          <View style={styles.navBar}>
  <View style={styles.leftContainer}>
   </View>
  <Text style={{color:'white',fontSize: 18, fontWeight: '600'}}>
   One Time Pasword (OTP)
  </Text>
  <View style={styles.rightContainer}>
    <View style={styles.rightIcon}>
   </View>
    </View>
</View>
</View>
      
    
      <View style={styles.container}>
       
        <View style={styles.inputContainer}>
        <Icon style={[{color: "black",paddingLeft:10,paddingRight:5}]} size={25} name={'md-unlock'}/>
         <TextInput style={styles.inputs}
              placeholder="Enter OTP"
              underlineColorAndroid='transparent'
              keyboardType={'numeric'}
              onChangeText={(email) => this.setState({email})}/>


        </View>
        
       
        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.Verifycred() }>
          <Text style={styles.loginText}>Verify OTP</Text>
        </TouchableHighlight>
        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.FunctionToOpenSecondActivity() }>
          <Text style={styles.loginText}>Generate OTP</Text>
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
  navBar: {
       
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'green',
  },
  leftContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: 'green'
  },
  rightContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'green',
  },
  rightIcon: {
    height: 10,
    width: 10,
    resizeMode: 'contain',
    backgroundColor: 'green',
  },
inputs:{
    height:35,
    marginLeft:5,
    borderBottomColor: '#FFFFFF',
    flex:1,
},
inputIcon:{
  width:20,
  height:20,
  marginLeft:20,
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
        DefaultScreen : Otp,
      Details: GpsRequest,
    },
    {
      initialRouteName: 'DefaultScreen',
      headerMode: 'none'
    }
  );
  
  const AppContainer = createAppContainer(RootStack);
  
export default class VerifyOtp extends React.Component {
    render() {
      return <AppContainer screenProps={this.props.navigation.state.params.phone}/>;
    }
  }

  
 