import React, { Component } from 'react';
import {StyleSheet, TouchableOpacity,TextInput,TouchableHighlight,Text,Image, View,Button,Alert,ScrollView} from 'react-native';  
import axios from 'axios';
import { Header, ThemeProvider } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';  

class transfertodistributor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            assetkey: '',
            distributorid: ''
        };
    }
    
    onSubmit(){
       
       const form = {
        assetkey: this.state.assetkey,
        distributorid: this.state.distributorid
       }
         {/* Send data to API*/}
         var authOptions = {
          method: 'post',
          url: 'http://35.229.19.138:3000/api/org.authentication.whey.transfertodistributor',
          data: JSON.stringify({"whey": "resource:org.authentication.whey.WheyProtein#"+this.state.assetkey,"distributor": "resource:org.authentication.whey.Distributor#"+this.state.distributorid,"DistributorId":this.state.distributorid}),
          headers: {
            'Content-Type': 'application/json'
           },
          json: true
         };
      axios(authOptions)
         .then((response) => {
          if(response.status==200){
            Alert.alert("Transfer successfull"); 
          }
          else{
           Alert.alert("SOMETHING WENT WRONG"); 
          }
             })
         .catch((error) => {
          Alert.alert("error")
           })
      
    }
    
    render() {
        return (
          <View>
               
          <Header backgroundColor="green"
        leftComponent={<Icon style={[{color: "white"}]} size={35} name={'ios-arrow-back'} onPress={() => this.props.navigation.goBack()} />}
         centerComponent={{ text: 'TRANSFER TO DISTRIBUTOR', style: { color: '#fff' } }}
         rightComponent={{ icon: 'home', color: '#fff' }}
       />

<View style={styles.cents}>

       <View style={styles.inputContainer}>
     <TextInput style={styles.inputs}
              placeholder="  Enter Whey Id"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(assetkey) => this.setState({assetkey})}/>
</View>
<View style={styles.inputContainer}>
     <TextInput style={styles.inputs}
              placeholder="  Distributor's email"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(distributorid) => this.setState({distributorid})}/>
</View>

<TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.onSubmit()}>
          <Text style={styles.loginText}>TRANSFER</Text>
        </TouchableHighlight>

        </View>
        </View>
        );
    }
    } 

   export default transfertodistributor;
  
const styles = StyleSheet.create({
    container: { flex: 8, padding: 16, paddingTop: 30, backgroundColor: '#fff' , flexDirection: 'column'},
    cent: {marginBottom:650},
    cents: {justifyContent: 'center', alignItems: 'center',paddingTop: 50},
    header: { height: 50, backgroundColor: '#537791' },
    text: { textAlign: 'center', fontWeight: '100' },
    dataWrapper: { marginTop: -1 },
    row: { height: 40, backgroundColor: '#E7E6E1' },
    inputContainer: {
      borderBottomColor: '#E8E8E8',
      backgroundColor: '#E8E8E8',
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
  
  
