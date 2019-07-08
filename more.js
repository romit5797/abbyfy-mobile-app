import React, { Component } from 'react';
import {StyleSheet, TouchableOpacity,TouchableHighlight,Text,Image, View,Button,Alert,ScrollView} from 'react-native';  
import MoreInterface from './moreinterface';
import TransM from './transfertomiddleman';
import TransS from './transfertosuper';
import TransD from './transfertodistributor';
import TransR from './transfertoretailer';
import addWhey from './addWhey';
import addMiddleman from './addMiddleman';
import addRetailer from './addRetailer';
import addSuper from './addSuper';
import addDistributor from './addDistributor';
import { createStackNavigator, createAppContainer } from 'react-navigation'; 


const RootStack = createStackNavigator(
  {
      Loginscreen : MoreInterface,
      Details1: MoreInterface,
      Details2: addWhey,
      Details3: addSuper,
      Details4: addSuper,
      Details4: addMiddleman,
      Details5: addDistributor,
      Details6: addRetailer,
      Details7: TransS,
      Details8: TransM,
      Details9: TransD,
      Details10: TransR,
   
  },
  {
    initialRouteName: 'Loginscreen',
    headerMode: 'none'
  }
);

const AppContainer = createAppContainer(RootStack);
 
export default class More extends Component {
  
  render() {
    let rj = [this.props.screenProps[0],this.props.screenProps[1]];
    return(
      <AppContainer screenProps={rj}/>
    );
    
  }
}


