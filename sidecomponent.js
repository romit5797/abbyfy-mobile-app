import React, { Component } from 'react';
import { StyleSheet,AppRegistry, Dimensions } from 'react-native';
import { createDrawerNavigator,createAppContainer } from 'react-navigation';

import SideMenu from './sidemenu'
import stackNav from './stacknav';

const Drawernav = createDrawerNavigator({
  Item1: {
      screen: stackNav,
    }
  }, {
    contentComponent: SideMenu,
    drawerWidth: Dimensions.get('window').width - 120,  
});
const SomeStack =  createAppContainer(Drawernav);  
export default class SideComponent extends Component {
    render()
    {
        return(
            <SomeStack/>
        )
    }
}
