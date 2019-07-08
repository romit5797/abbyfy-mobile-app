import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,Alert,
  View, TouchableOpacity
} from 'react-native';

import { createStackNavigator,createAppContainer} from  'react-navigation';
import IOSIcon from "react-native-vector-icons/Ionicons";
import MoreInterface from "./moreinterface";
import Login from './addDistributor';

const stackNav = createStackNavigator({
  Main : {
    screen: MoreInterface,
    navigationOptions: ({navigation}) => ({
      title: "Main",
      headerLeft:(<TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <IOSIcon name="ios-menu" size={30} />
                  </TouchableOpacity>
      ),
      headerStyle: { paddingRight: 10, paddingLeft: 15 }
    })
  },
  Detail: {
    screen: Login,
    navigationOptions: ({navigation}) => ({
      title: "Detail",
    })     
  },
},
{  
    initialRouteName: "Main"
},
);
const SomeStack =  createAppContainer(stackNav); 
export default  SomeStack;