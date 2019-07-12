import React from 'react';  
import {StyleSheet, TouchableHighlight,Text,Image, View,Button} from 'react-native';  
import { createBottomTabNavigator, createAppContainer} from 'react-navigation';  
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';  
import Icon from 'react-native-vector-icons/Ionicons';  
import SideComponent from './sidecomponent';
import Home from './home';
import Categories from './categories';
import Account from './account';
import Cart from './cart';

const TabNavigator  = createMaterialBottomTabNavigator(  
    {  
        Home: { screen: Home,  
            navigationOptions:{  
                tabBarLabel:'Home',  
                tabBarIcon: ({ tintColor }) => (  
                    <View>  
                     
                 <Icon style={[{color: tintColor}]} size={25} name={Platform.OS === 'ios' ? 'ios-home' : 'md-home'}/>  
                    </View>),  
            }  
        },  
        Profile: { screen: Categories,  
            navigationOptions:{  
                tabBarLabel:'Categories',  
                tabBarIcon: ({ tintColor }) => (  
                    <View>  
                        <Icon style={[{color: tintColor}]} size={25} name={Platform.OS === 'ios' ? 'ios-listb' : 'md-list'}/>  
                    </View>),  
                 activeColor: 'green',  
                 inactiveColor: '#D3D3D3',  
                 barStyle: { backgroundColor: '#F5F5F5' },
                   
            }  
        },  
        Cart: { screen: Cart,
            navigationOptions:{  
                tabBarLabel:'Cart',  
                tabBarIcon: ({ tintColor }) => (  
                    <View>  
                        <Icon style={[{color: tintColor}]} size={25} name={Platform.OS === 'ios' ? 'ios-cart' : 'md-cart'}/>  
                    </View>),  
                 activeColor: 'green',  
                 inactiveColor: '#D3D3D3',  
                 barStyle: { backgroundColor: '#F5F5F5' },   
            }  
        },  
        Account: {  
            screen: Account,
            navigationOptions:{  
                tabBarLabel:'Account',  
                tabBarIcon: ({ tintColor }) => (  
                    <View>  
                        <Icon style={[{color: tintColor}]} size={25} name={Platform.OS === 'ios' ? 'ios-person' : 'md-person'}/>  
                    </View>),  
            }  
        },  
    },  
    {   labeled: true, 
        shifting: false,
      initialRouteName: "Home",  
      activeColor: 'green',  
      inactiveColor: '#A9A9A9',  
      barStyle: { backgroundColor: '#F8F8F8' },  
    },  
);  
const SomeStack =  createAppContainer(TabNavigator);  

export default class Test extends React.Component
{
    render() {
         return(
            
         <SomeStack/>
        );
    }
}